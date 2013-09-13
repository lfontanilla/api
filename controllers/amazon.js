/* put controller actions here */
var common = require('../config/config');
var config = common.config();

exports.search = function(req, res) {
//  var searchterms = req.params.searchterms;  
//  request(config.apiurl + '/amazonsearch/' + searchterms, function(error, response, body) {
//    var data = {};
//    if (!error && response.statusCode == 200)
//      data = body;
//    res.render('amazonsearch', {title: 'Amazon Search', data: data, searchterms:searchterms});
//  });
  var searchterms = req.params.searchterms;
  console.log("searchterms");
  console.log(searchterms);
  if (!searchterms)
    return {error: true, message: "There's no search term defined"};
  // Load dependency
  var apa = require('apa-client');

// Create a client
  var client = apa.createClient({
    "awsAccessKeyId": "AKIAJVWXAWPI3Q6JFQWA", // your aws access key id here
    "awsSecretKey": "QsoKDwM94ZARBLJGdvtIVHDGUnh+dP/Ue4FLosSi", // your secret key here
    "associateTag": "1921-5018-6753" // your associate tag here
  });

// Switch locale (default endpoint is ecs.amazonaws.com)
  client.switchLocale('us'); // new endpoint is ecs.amazonaws.fr

// Execute 'ItemSearch' operation with few arguments
  client.execute('ItemSearch', {
    SearchIndex: 'All',
    Keywords: searchterms,
    ResponseGroup: 'OfferFull,Images,ItemAttributes',
    Availability: 'Available'
  }, function(err, data) {
    if (err)
      return {error: true, message: err};
    res.send(data);
  });
};