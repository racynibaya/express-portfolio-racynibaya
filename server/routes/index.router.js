import express from 'express';

import {
  renderAboutPage,
  renderHomePage,
  renderProjectPage,
  renderContactPage,
  renderServicePage,
  renderRootPage,
  displayLoginPage,
  displayRegisterPage,
  processLoginPage,
  processRegisterPage,
  performLogout,
} from '../controllers/index.controller.js';

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', renderRootPage);

indexRouter.get('/home', renderHomePage);

indexRouter.get('/about', renderAboutPage);

indexRouter.get('/projects', renderProjectPage);

indexRouter.get('/contact', renderContactPage);

indexRouter.get('/services', renderServicePage);

/* GET Router for displaying the login page*/
indexRouter.get('/login', displayLoginPage);
/* POST Router for processing the Login Page*/
indexRouter.post('/login', processLoginPage);

/* GET Router for displaying register Page*/
indexRouter.get('/register', displayRegisterPage);

/* POST Router for processing the register Page*/
indexRouter.post('/register', processRegisterPage);

/* GET Router for processing the Login Page*/
indexRouter.get('/logout', performLogout);

export default indexRouter;
