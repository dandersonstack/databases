var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("It got to the get messages in the controller: ", req.url);
      res.statusCode = 200;
      models.messages.get().then((result)=>{
        // console.log(JSON.stringify(result));
        // console.log("RESULT in CONTROLLERS<><>,", JSON.stringify(result));
        res.send({results: result});
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log("Is it hitting here?", req.body);
      models.messages.post(req.body);
      res.end();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.statusCode = 200;
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.statusCode = 200;
      res.end();
    } // a function which handles posting a message to the database
  }
};

