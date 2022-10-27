import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';

import {
  performDelete,
  processEditPage,
  displayEditPage,
  processAddPage,
  displayAddPage,
  displayContactList,
} from '../controllers/contact.js';

import Book from '../model/contact.js';

const router = express.Router();

//helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}
//connect to our book model

//GET ROUTE for the book list page - READ OPERATION
router.get('/', displayContactList);

// GET Route for displaying the Add page - CREATE operation

router.get('/add', requireAuth, displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/

router.post('/add', requireAuth, processAddPage);

/*GET Route for displaying the Edit page - UPDATE operation*/

router.get('/edit/:id', requireAuth, displayEditPage);

/*POST Route for processing the Edit page - UPDATE operation*/

router.post('/edit/:id', requireAuth, processEditPage);

/*GET to perform Deletion - DELETE operation*/

router.get('/delete/:id', requireAuth, performDelete);

export default router;
