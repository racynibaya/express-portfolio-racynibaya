var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Home page');
  res.render('index', { title: 'Express' });
});

router.get('/about', function (req, res, next) {
  res.send('About page');
});

router.get('/projects', function (req, res, next) {
  res.send('Projects page');
});

router.get('/contact', function (req, res, next) {
  res.send('contact page');
});

router.get('/services', function (req, res, next) {
  res.send('services page');
});
module.exports = router;
