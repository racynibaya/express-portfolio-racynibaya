export const renderHomePage = function (req, res) {
  // res.render('index', { title: 'Home' });
  res.render('index', { title: 'home', page: 'home' });
};

export const renderAboutPage = function (req, res) {
  res.render('partials/about', { title: 'about', page: 'about' });
};

export const renderProjectPage = function (req, res) {
  res.render('partials/projects', { title: 'projects', page: 'projects' });
};

export const renderContactPage = function (req, res) {
  res.send('contact');
};

export const renderServicePage = function (req, res) {
  res.render('index', { title: 'Service' });
};
