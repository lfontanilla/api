/*
 * Module dependencies
 */
var express = require('express');
var common = require('./config/config');
var config = common.config();

var app = express(), amazon = require('./amazon/index');

app.use(express.logger('dev'));

app.get('/amazonsearch/:searchterm', amazon.search);

app.listen(config.port, config.host, function() {
  console.log("Express server listening on port %d in %s mode, THIS IS THE API", config.port, app.settings.env);
});