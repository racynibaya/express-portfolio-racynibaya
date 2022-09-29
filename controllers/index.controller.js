export const renderRootPage = function (req, res) {
  res.render('index', { title: 'root', page: 'home' });
};

export const renderHomePage = function (req, res) {
  // res.render('index', { title: 'Home' });
  res.render('index', { title: 'home', page: 'home' });
};

export const renderAboutPage = function (req, res) {
  res.render('index', { title: 'about', page: 'about' });
};

export const renderProjectPage = function (req, res) {
  res.render('index', { title: 'projects', page: 'projects' });
};

export const renderContactPage = function (req, res) {
  res.render('index', { title: 'contact', page: 'contact' });
};

export const renderServicePage = function (req, res) {
  res.render('index', { title: 'services', page: 'services' });
};
