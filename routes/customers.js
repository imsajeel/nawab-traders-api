const express = require("express");
const mysqlConnection = require("../connection");
const Router = express.Router();

Router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * from cem_customers", (err, rows, feilds) => {
    if (!err) {
      res.send(rows);
    } else {
      res.send({
        status: "error",
        message: "something went wrong",
        payload: err,
      });
    }
  });
});

module.exports = Router;
