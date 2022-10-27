import express from 'express';
let router = express.Router();
import mongoose from 'mongoose';
import Contact from '../model/contact.js';

export const displayContactList = (req, res, next) => {
  Contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render('contact/list', {
        title: 'Contacts',
        ContactList: contactList,
        displayName: req.user ? req.user.displayName : '',
      });
    }
  });
};

export const displayAddPage = (req, res, next) => {
  res.render('contact/add', {
    title: 'Add Book',
    displayName: req.user ? req.user.displayName : '',
  });
};

export const processAddPage = (req, res, next) => {
  let newContact = Contact({
    name: req.body.name,
    description: req.body.description,
    email: req.body.email,
    number: req.body.price,
  });
  Contact.create(newBook, (err, Book) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/contactList');
    }
  });
};

export const displayEditPage = (req, res, next) => {
  let id = req.params.id;
  Contact.findById(id, (err, bookToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render('contact/edit', {
        title: 'Edit Book',
        book: bookToEdit,
        displayName: req.user ? req.user.displayName : '',
      });
    }
  });
};

export const processEditPage = (req, res, next) => {
  let id = req.params.id;
  console.log(req.body);
  let updatedBook = Book({
    _id: id,
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    description: req.body.description,
    price: req.body.price,
  });
  Contact.updateOne({ _id: id }, updatedBook, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/contactList');
    }
  });
};

export const performDelete = (req, res, next) => {
  let id = req.params.id;
  Contact.remove({ _id: id }, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/contactList');
    }
  });
};
