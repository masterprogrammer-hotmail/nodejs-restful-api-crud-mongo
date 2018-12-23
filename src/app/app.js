var express = require('express');
var app = express();
var db = require('../db');

var UserController = require('../controllers/UserController');
app.use('/api/users', UserController);

// app.js
var AuthController = require('../controllers/authController');
app.use('/api/auth', AuthController);

module.exports = app;