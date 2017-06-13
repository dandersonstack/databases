var db = require('../db');
var Promise = require('bluebird');


var queryFunc = (queryString) => {
  return new Promise((resolve, reject)=> {
    db.con.query(queryString, (err, result)=> {
      if (err) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  });
};


module.exports = {
  messages: {
    get: function (callback) {
      var sql = 'Select * from messages';
      db.con.query(sql, function (err, result) {
        if (err) { throw err; }
        console.log("Result from the get: " + result);
        callback(result);
      }); 
    }, // a function which produces all the messages
    post: function (data) {
      console.log("POST data is:", data);
      
      // post the rooms data
      module.exports.rooms.post(data, ()=>{
        
      });
      
      
      
      
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
        callback(result[0]['id']);
      });
    },
    
    get: function (callback) {
      var sqlRoom = 'Select * from rooms';
      db.con.query(sqlRoom, function (err, result) {
        if (err) { throw err; }
        console.log('Result from the room get: ' + JSON.stringify(result));
        callback(result);
      }); 
    },
    post: function (data, callback) {
      var sqlRoom = `INSERT INTO rooms SET name='${data.roomname}' `;
      db.con.query(sqlRoom, function(err, result) {
        if (err) { 
          console.log('We are already added this username');
        }
        console.log('The UserName Post was successful');
        callback();
      });
    }
  },

  users: {
    // Ditto as above.
    _getUserId: function(userName, callback) {
      var sql = `Select id from users where name='${username}'`;
      db.con.query(sql, function (err, result) {
        if (err) { throw err; }
        callback(result[0]['id']);
      });
    },
    
    get: function (callback) {
      var sqlUser = 'Select * from users';
      db.con.query(sqlUser, function (err, result) {
        if (err) { throw err; }
        console.log('Result from the room get: ' + JSON.stringify(result));
        callback(result);
      }); 
    },
    post: function (data, callback) {
      var sqlUser = `INSERT INTO users SET name='${data.roomname}' `;
      db.con.query(sqlUser, function(err, result) {
        if (err) { 
          console.log('We are already added this username');
        }
        console.log('The UserName Post was successful');
        callback();
      });
    }
  }
};

