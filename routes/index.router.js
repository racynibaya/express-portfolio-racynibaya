import express from 'express';
const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', function (req, res, next) {
  res.send('Home page');
  res.render('index', { title: 'Express' });
});

indexRouter.get('/about', function (req, res, next) {
  res.send('About page');
});

indexRouter.get('/projects', function (req, res, next) {
  res.send('Projects page');
});

indexRouter.get('/contact', function (req, res, next) {
  res.send('contact page');
});

indexRouter.get('/services', function (req, res, next) {
  res.send('services page');
});

export default indexRouter;
