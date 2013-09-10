exports.search = function(req, res) {

  var searchterm = req.params.searchterm;
  if (!searchterm)
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
    Keywords: searchterm,
    ResponseGroup: 'OfferFull',
    Availability: 'Available'
  }, function(err, data) {
    if (err)
      return {error: true, message: err};
    res.send(data);
  });
};