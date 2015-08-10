// modules =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configuration ===========================================
	// connect to database here

// config files
// var db = require(DATABASE PATH NAME);

// set our port
var port = process.env.PORT || 3000
console.log(__dirname);
// set the static files location

  app.use('/node_modules', express.static(__dirname + '/node_modules'));
  app.use(express.static(__dirname + '/public'));

// app.use(express.static(__dirname + '/node_modules'));

// routes
app.listen(port);

// shoutout to the user
console.log('Tip off on port', port);

// expose the app
exports = module.exports = app;