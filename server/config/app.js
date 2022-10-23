import createError from 'http-errors';
import express from 'express';
import path, { dirname } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import session from 'express-session';

import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

import { fileURLToPath } from 'url';

import indexRouter from '../routes/index.router.js';
import usersRouter from '../routes/users.js';
import booksRouter from '../routes/book.js';

import { User } from '../model/user.js';

const localStrategy = passportLocal.Strategy;

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// view engine setup to ejs
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../../public')));

app.use(express.static(path.join(__dirname, '../../public/content')));
app.use('/css', express.static(__dirname + 'content/css'));
app.use('/assets', express.static(__dirname + 'content/assets'));

app.use(
  session({
    secret: 'SomeSecret',
    saveUninitialized: false,
    //resave:false
    reSave: false,
  })
);

//initialize flash
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//passport user Configuration

//Create a user model instance

passport.use(User.createStrategy());
//serialize and deserialize the user info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bookList', booksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
