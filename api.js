/*
 * Module dependencies
 */
var express = require('express');

var app = express(), routes = require('./routes/index');

app.use(express.logger('dev'));
app.get('/', routes.amazonsearch);
app.listen(4000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:4000/');