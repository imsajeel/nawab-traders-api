const express = require("express");
const mysqlConnection = require("../connection");
const bcrypt = require("bcrypt");

const Router = express.Router();

const saltRound = 12;

Router.post("/", (req, res) => {
  const { username, password, typeuser } = req.body;

  if ((username, password, typeuser)) {
    bcrypt.hash(password, saltRound, (err, hash) => {
      if (err) {
        res.send("Error");
      }

      const sql = `INSERT INTO users (username,hash,typeuser,active) VALUES ('${username}','${hash}','${typeuser}','true')`;
      mysqlConnection.query(sql, (err, result) => {
        if (err) {
          if (err.code == "ER_DUP_ENTRY" || err.errno == 1062) {
            res.json({
              id: 1,
              status: "error",
              payload: err,
              message: "User already exist",
            });
          } else {
            res.json({
              id: 1,
              status: "error",
              payload: err,
              message: "Unknown Error",
            });
          }
        } else {
          res.json({
            id: 1,
            status: "success",
            payload: result,
            message: "user added",
          });
        }
      });
    });
  } else {
    res.send("You");
  }
});

module.exports = Router;
