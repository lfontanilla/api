/*
 * Module dependencies
 */
var express = require('express');

var app = express(), amazon = require('./amazon/index');

app.use(express.logger('dev'));

app.get('/amazonsearch/:searchterm', amazon.search);

app.listen(4000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:4000');