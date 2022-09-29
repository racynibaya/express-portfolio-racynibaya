export const renderHomePage = function (req, res) {
  // res.render('index', { title: 'Home' });
  res.render('index', { title: 'home' });
};

export const renderAboutPage = function (req, res) {
  res.render('index', { title: 'about' });
};

export const renderProjectPage = function (req, res) {
  res.render('<h1>Hello</h1>');
};

export const renderContactPage = function (req, res) {
  res.send('contact');
};

export const renderServicePage = function (req, res) {
  res.render('index', { title: 'Service' });
};
