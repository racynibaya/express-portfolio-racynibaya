import { User } from '../model/user.js';

export const renderRootPage = function (req, res) {
  res.render('index', {
    title: 'root',
    page: 'home',
    displayName: req.user ? req.user.displayName : '',
  });
};

export const renderHomePage = function (req, res) {
  // res.render('index', { title: 'Home' });
  res.render('index', { title: 'home', page: 'home' });
};

export const renderAboutPage = function (req, res) {
  res.render('index', {
    title: 'about',
    page: 'about',
    displayName: req.user ? req.user.displayName : '',
  });
};

export const renderProjectPage = function (req, res) {
  res.render('index', {
    title: 'projects',
    page: 'projects',
    displayName: req.user ? req.user.displayName : '',
  });
};

export const renderContactPage = function (req, res) {
  res.render('index', {
    title: 'contact',
    page: 'contact',
    displayName: req.user ? req.user.displayName : '',
  });
};

export const renderServicePage = function (req, res) {
  res.render('index', {
    title: 'services',
    page: 'services',
    displayName: req.user ? req.user.displayName : '',
  });
};

// asdfds

export const displayLoginPage = (req, res, next) => {
  //check if the user is already logged in
  if (!req.user) {
    res.render('auth/login', {
      title: 'Login',
      messages: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName : '',
    });
  } else {
    return res.redirect('/');
  }
};
export const processLoginPage = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    //server err?
    if (err) {
      //console.log(err);
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash('loginMessage', 'Authentication Error');
      return res.redirect('/login');
    }
    req.login(user, err => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect('/bookList');
    });
  })(req, res, next);
};
export const displayRegisterPage = (req, res, next) => {
  // check if the user is not already logged in
  if (!req.user) {
    res.render('auth/register', {
      title: 'Register',
      messages: req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName : '',
    });
  } else {
    return res.redirect('/');
  }
};
export const processRegisterPage = (req, res, next) => {
  //instantiate a user object
  let newUser = new User({
    username: req.body.username,
    //password:req.body.password
    email: req.body.email,
    displayName: req.body.displayName,
  });
  User.register(newUser, req.body.password, err => {
    if (err) {
      console.log('Error:inserting New User');
      if (err.nme == 'UserExistsError') {
        req.flash('registerMessage', 'Registration Error:User Already Exists!');
        console.log('Error: UserAlready Exists!');
      }
      return res.render('auth/register', {
        title: 'Register',
        messages: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName : '',
      });
    } else {
      // if no error exists, then registration is successful
      // redirect the user and authenticate them
      return passport.authenticate('local')(req, res, () => {
        res.redirect('/bookList');
      });
    }
  });
};
export const performLogout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};
