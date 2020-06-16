const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "S@j337.",
  database: "nawab",
  // multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("Connection failed");
  }
});

module.exports = mysqlConnection;
