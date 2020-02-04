var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

// var connection = mysql.createConnection({
//   host: "k2fqe1if4c7uowsh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   user: "amnltl8pishv3qer",
//   password: "dri8rm42ytj09xoo",
//   database: "cw8e6jpww661y5af"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;