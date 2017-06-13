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
// var theMessages;


