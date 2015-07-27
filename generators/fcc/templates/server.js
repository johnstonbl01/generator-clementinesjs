'use strict';

// Define dependencies
var express = require('express');
var	routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

// Initialize Express
var app = express();
require('./app/config/passport')(passport);

mongoose.connect('mongodb://localhost:27017/clementinejs');

app.use('/factories', express.static(process.cwd() + '/app/factories'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));

app.use(session({
	secret: 'secretclementine',
	resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Initialize application routes
routes(app, passport);

var port = 3000;
app.listen(port, function () {
	console.log('Node.js listening on port ' + port + '...');
});
