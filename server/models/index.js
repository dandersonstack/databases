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
    //console.log('There was an error and Ignored');
  });
};


module.exports = {
  messages: {
    get: function () {
      var sql = `Select messages.id, users.username, messages.text, rooms.roomname from messages inner join
                users inner join rooms where users.id = messages.id_users 
                and rooms.id = messages.id_rooms`;
      return queryFunc(sql);
    }, // a function which produces all the messages
    post: function (data) {
      let userId = null;
      let roomId = null;
      
      console.log('POST data is:', data);
      return module.exports.rooms.post(data).then((result)=>{
        return module.exports.users.post(data);
      })
      .then((result)=> {
        return module.exports.rooms.getId(data.roomname);
      }).then((result)=> {
        roomId = result[0].id;
        return module.exports.users.getId(data.username);
      }).then((result)=> {
        // console.log("the results are:", result);
        userId = result[0].id;
        var sql = `Insert into messages set text='${data.text}', id_users='${userId}', id_rooms='${roomId}'`;
        return queryFunc(sql);
      }).then((result)=> {
      });
      
    } // a function which can be used to insert a message into the database
  },
  rooms: {
    getId: function (roomname) {
      var sqlRoom = `Select id from rooms where roomname='${roomname}'`;
      return queryFunc(sqlRoom);     
    },
    
    get: function () {
      var sqlRoom = `Select * from rooms`;
      return queryFunc(sqlRoom);     
    },
    post: function (data) {
      var sqlRoom = `INSERT INTO rooms SET roomname='${data.roomname}' `;
      return queryFunc(sqlRoom);
    }
  },

  users: {  
    getId: function (username) {
      var sqlUser = `Select id from users where username='${username}'`;
      return queryFunc(sqlUser);     
    },
    
    get: function () {
      var sqlUser = 'Select * from users';
      return queryFunc(sqlRoom);    
    },
    post: function (data) {
      var sqlUser = `INSERT INTO users SET username='${data.username}' `;
      return queryFunc(sqlUser);
    }
  }
};

