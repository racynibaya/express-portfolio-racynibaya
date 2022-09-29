import express from 'express';

import {
  renderAboutPage,
  renderHomePage,
  renderProjectPage,
  renderContactPage,
  renderServicePage,
  renderRootPage,
} from '../controllers/index.controller.js';

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', renderRootPage);

indexRouter.get('/home', renderHomePage);

indexRouter.get('/about', renderAboutPage);

indexRouter.get('/projects', renderProjectPage);

indexRouter.get('/contact', renderContactPage);

indexRouter.get('/services', renderServicePage);

export default indexRouter;
