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
      
      
      
      // insert username data to the user table
      // insert rooms data to the room table
        // insert the message data with user id and rooms id to the messages table
      
      
      
      // var sqlRooms = `Insert into rooms set name= "${data.roomname}" `;
      
      // var sqlMessages = `Insert into messages set text = "${data.messages}"`;

      // if username already exist in users table, dont query into users table
        // use get to check if username exist
        
      
      
    } // a function which can be used to insert a message into the database
  },
  rooms: {
    // Ditto as above.
    _getRoomId: function(roomName, callback) {
      var sql = `Select id from rooms where name='${roomname}'`;
      db.con.query(sql, function (err, result) {
        if (err) { throw err; }
        console.log(result[0]['id']);
      });
    },
    
    get: function () {
      var sqlRoom = 'Select * from rooms';
      db.con.query(sqlRoom, function (err, result) {
        if (err) { throw err; }
        console.log('Result from the room get: ' + JSON.stringify(result));
      }); 
    },
    post: function (data) {
      var sqlRoom = `INSERT INTO rooms SET name='${data.roomname}' `;
      db.con.query(sqlRoom, function(err, result) {
        if (err) { 
          console.log('We are already added this username');
        } else {
          console.log('The UserName Post was successful');
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {
      var sql = 'Select * from users';
      db.con.query(sql, function (err, result) {
        if (err) { throw err; }
        console.log('Result from the user get: ' + result);
        return result;
      }); 
    },
    post: function (data) {
      var sqlUser = `INSERT INTO users SET name='${data.username}' `;
      db.con.query(sqlUser, function(err, result) {
        if (err) { 
          console.log('We are already added this username');
        } else {
          console.log('The UserName Post was successful');
        }
      });
    }
  }
};

