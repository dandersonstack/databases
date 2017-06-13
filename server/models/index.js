var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      var sql = 'Select * from messages';
      db.con.query(sql, function (err, result) {
        if (err) { throw err; }
        console.log("Result from the get: " + result);
        return result;
      }); 
    }, // a function which produces all the messages
    post: function (data) {
      
      console.log("POST data is:", data);
      console.log("I got to model post method");
      // insert username data to the user table
      // insert rooms data to the room table
        // insert the message data with user id and rooms id to the messages table
      
      
      var sqlUser = `Insert into users set name= "${data.username}" `;
      
      var sqlRooms = `Insert into rooms set name= "${data.roomname}" `;
      
      var sqlMessages = `Insert into messages set text = "${data.messages}"`;

      // if username already exist in users table, dont query into users table
        // use get to check if username exist
        
      db.con.query(sqlUser, function(err, result) {
        if (err) { throw err; }
        console.log('QUERY USER RESULT<><>', result);
      });
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

