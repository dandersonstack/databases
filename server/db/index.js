var mysql = require('mysql');


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


//TODO connect the database with our app

exports.con = mysql.createConnection({
  database: 'chat',
  user: 'root',
  password: 'plantlife'
});







// var data =  { username: 'karel', text: 'asdfasdf', roomname: 'lobby' };

// var queryFunc = (queryString) => {
//   return new Promise((resolve, reject)=> {
//     con.query(queryString, (err, result)=> {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   })
//   .catch((err)=>{
//     console.log("There was an error thrown");
//   });
// };


// var sql = `Select users.userName, messages.text, rooms.roomName from messages inner join
//                 users inner join rooms where users.id = messages.id_users 
//                 and rooms.id = messages.id_rooms`;
// queryFunc(sql).then((result)=>{
//   console.log(JSON.stringify(result));
// });
//.then((result)=> {
  // if (there is) {
  //   return queryFunc('add new user')
  // } else {
  //   return new Promise((res, rej) => res());
  // }
//});
// .then(() => )










// var queryFunc = (queryString, callback) => {
//   return new Promise((resolve, reject)=> {
//     con.query(queryString, (err, result)=> {
//       if (err) {
//         reject(result);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// var sql = 'Select * from messages';
// queryFunc(sql, callback)
// .then((result)=>{
//   callback(null, result);
// })
// .catch(()=>{
//   callback(err, null);
// });

// let theCallBack = (result)=>{
//   if(err)
//   console.log("result")
// }


// db.con.query(sql, function (err, result) {
//   if (err) { throw err; }
//   console.log("Result from the get: " + result);
//   callback(result);
// }); 
