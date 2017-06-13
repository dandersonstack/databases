var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("It got to the get messages in the controller: ", req.url);
      res.statusCode = 200;
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("It got to the post messages in the controller: ", req.url);
      res.statusCode = 404;
      res.end();
    }
    // options: function(req, res) {
    //   res.writeHead(200, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type'});
    //   res.end();
    //  // a function which handles posting a message to the database
    // }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("It got to the get messages in the controller: ", req.url);
      res.statusCode = 200;
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.statusCode = 200;
      res.end();
    } // a function which handles posting a message to the database
  }
};

