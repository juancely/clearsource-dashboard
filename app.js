"use strict";

const
  express = require('express')
, app = express()
, db = require('./db')
;

var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;
