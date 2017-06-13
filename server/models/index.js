var db = require('../db');
var Promise = require('bluebird');


var queryFunc = (queryString) => {
  return new Promise((resolve, reject)=> {
    db.con.query(queryString, (err, result)=> {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  })
  .catch((err)=>{
    console.log("There was an error thrown");
  });
};


module.exports = {
  messages: {
    get: function () {
      var sql = `Select messages.id, users.userName, messages.text, rooms.roomName from messages inner join
                users inner join rooms where users.id = messages.id_users 
                and rooms.id = messages.id_rooms`;
      return queryFunc(sql);
    }, // a function which produces all the messages
    post: function (data, callback) {
      console.log("POST data is:", data);
      
      // post the rooms data
      //get rooms Id and User Id
      //we need create a new and a new user if they don't exist
      
      
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
    get: function () {
      var sqlRoom = `Select * from rooms`;
      return queryFunc(sqlRoom);     
    },
    post: function (data, callback) {
      var sqlRoom = `INSERT INTO rooms SET name='${data.roomname}' `;
      queryFunc(sqlRoom, callback);
    }
  },

  users: {  
    get: function () {
      var sqlUser = 'Select * from users';
      return queryFunc(sqlRoom);    
    },
    post: function (data, callback) {
      var sqlUser = `INSERT INTO users SET name='${data.roomname}' `;
      queryFunc(sqlUser, callback);
    }
  }
};

