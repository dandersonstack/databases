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
      console.log("We are getting to the model get");
      var sql = `Select users.userName, messages.text, rooms.roomName from messages inner join
                users inner join rooms where users.id = messages.id_users 
                and rooms.id = messages.id_rooms`;
      return queryFunc(sql);
    }, // a function which produces all the messages
    post: function (data, callback) {
      console.log("POST data is:", data);
      
      // post the rooms data
      var sqlMessage = `INSERT INTO message SET name='${data.text}'`;
      module.exports.rooms.post(data, (err, result) => {
        console.log("The result from post is:", result);
        console.log("The Data should still be:", data);
        console.log("The room name we are using is:", data.roomname);
        
        
        
        module.exports.rooms.get((err, roomResult) => {
          
          
          console.log("error data:", err);
          
          console.log("Rooms Data:", JSON.stringify(roomResult));
        });
          
          
          
          
          
        // module.exports.users.post(data, (err, userResult)=>{
        //   console.log("Rooms Data:", JSON.stringify(roomResult));
        //   console.log("User Data:", JSON.stringify(userResult));
        //   //var sqlMessage = `INSERT INTO message SET name='${data.text}', room_id=${roomResult[0].id}, user_id=${userResult[0].id}`;
        //   //queryFunc(sqlMessage, callback);
        // });
        // });
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
    get: function () {
      var sqlRoom = `Select * from rooms`;
      queryFunc(sqlRoom).then((result)=>{
        console.log(JSON.stringify(result));
        return result;
        //return queryFunc('Some insert function');
      });
      
    },
    post: function (data, callback) {
      var sqlRoom = `INSERT INTO rooms SET name='${data.roomname}' `;
      queryFunc(sqlRoom, callback);
    }
  },

  users: {  
    get: function (callback) {
      var sqlUser = 'Select * from users';
      queryFunc(sqlUser, callback); 
    },
    post: function (data, callback) {
      var sqlUser = `INSERT INTO users SET name='${data.roomname}' `;
      queryFunc(sqlUser, callback);
    }
  }
};

