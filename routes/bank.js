const express = require("express");
const mysqlConnection = require("../connection");
const Router = express.Router();

Router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * from cem_bank", (err, rows, feilds) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = Router;
