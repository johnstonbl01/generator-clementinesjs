'use strict';

// Dependencies
var express = require('express'),
	db = require('mongoose'),
	routes = require('./app/routes/index.js');

// Init Express
var app = express();

// Database connection
db.connect('mongodb://localhost:27017/clementinejs');

// View engine config
app.set('view engine', 'jade');
app.set('views', './app/views');

// Static routes
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));

// Routes
routes(app);

// Listen
var port = 3000;
app.listen(port, function () {
	console.log('Node.js listening on port ' + port + '...');
});
