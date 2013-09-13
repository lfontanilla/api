/*
 * Module dependencies
 */
var express = require('express');
var common = require('./config/config');
var config = common.config();

var app = module.exports = express();

// Configuration, defaults to jade as the view engine
app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.logger('dev'));
  app.use(express.methodOverride());
  app.use(app.router);
});

//app.get('/amazonsearch/:searchterm', amazon.search);

app.listen(config.port, config.host, function() {
  console.log("Express server listening on port %d in %s mode, THIS IS THE API", config.port, app.settings.env);
});

/*
 * Exports the express app for other modules to use
 * all route matches go the routes.js file
 */
module.exports.app = app;
routes = require('./routes');