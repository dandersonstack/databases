var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


//TODO connect the database with our app

var con = mysql.createConnection({
  database: 'chat',
  user: 'root',
  password: 'plantlife'
});


var data =  { username: 'karel', text: 'asdfasdf', roomname: 'lobby' };
// var theMessages;



var queryFunc = (queryString) => {
  return new Promise((resolve, reject)=> {
    con.query(queryString, (err, result)=> {
      if (err) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  });
};

var sql = 'Select * from users';
let messagePromise = queryFunc(sql);
messagePromise
.then((result)=>{
  console.log("Result is:", JSON.stringify(result));
})
.catch(()=>{
  console.log("There was an error");
});

// db.con.query(sql, function (err, result) {
//   if (err) { throw err; }
//   console.log("Result from the get: " + result);
//   callback(result);
// }); 
