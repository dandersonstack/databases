var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("It got to the get messages in the controller: ", req.url);
      res.statusCode = 200;
      models.messages.get().then((result)=>{
        console.log("Is this getting called and failing?");
        console.log("what is result,", JSON.stringify(result));
        res.end(result);
      });
      // res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("It got to the post messages in the controller: ", req.url);
      console.log('HELLO<><>', req.body);
      // console.log(JSON.stringify(req.body, null, 2));
      // models.messages.post(req.body, (err, result) => {
      //   if (err) {
      //     console.log("There was an error", err);
      //     res.end();
      //   } else {
      //     console.log("There was no error", result);
      //     res.end(result);
      //   }
      //   // console.log('calling the callback', result);
      //   //going to call res.end() in here.
      // });
      
      // models.messages.post(45);
      
      res.statusCode = 200;
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

