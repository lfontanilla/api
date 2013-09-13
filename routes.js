/* This file maps your route matches
 * to functions defined in various
 * controller classes
 */
app = module.parent.exports.app;

/* require your controllers here */
var amazonController = require('./controllers/amazon');

/* Put routes here */

// amazon routes
app.get('/amazonsearch/:searchterms', amazonController.search);

