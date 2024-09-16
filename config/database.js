const mysql = require("mysql");


if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  
  const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  db.connect((err) => {
    if (err) {
      throw err;
    } else {
      console.log("MYSQL Connected Successfully");
    }
  });
  module.exports = db;