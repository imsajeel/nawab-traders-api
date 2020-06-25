const express = require("express");
const mysqlConnection = require("../../connection");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("Hello");
});

Router.post("/customer", (req, res) => {
  if (req.body.name) {
    const {
      name,
      nameShop,
      idCard,
      ntn,
      address,
      ph1,
      ph2,
      ph3,
      opBalance,
      comments,
    } = req.body;

    const sql = `INSERT INTO cem_customers (name,shopname,idcard,ntn,address,ph1,ph2,ph3,balance,comments) VALUES ('${name}','${nameShop}','${idCard}','${ntn}','${address}','${ph1}','${ph2}','${ph3}','${opBalance}','${comments}')`;

    mysqlConnection.query(sql, (err, result) => {
      if (err) {
        if (err.code == "ER_DUP_ENTRY" || err.errno == 1062) {
          res.json({
            status: "success",
            message: "Customer already exist",
            payload: err,
          });
        } else {
          res.json({ status: "error", message: "Unknown Error", payload: err });
        }
      } else {
        res.json({ status: "success", message: "Customer succefully added." });
      }
    });
  } else {
    res.json({ status: "error", message: "Please enter name of customer." });
  }
});

Router.post("/supplier", (req, res) => {
  if (req.body.name) {
    const {
      name,
      nameShop,
      idCard,
      ntn,
      address,
      ph1,
      ph2,
      ph3,
      opBalance,
      comments,
    } = req.body;

    const sql = `INSERT INTO cem_customers (name,shopname,idcard,ntn,address,ph1,ph2,ph3,balance,comments) VALUES ('${name}','${nameShop}','${idCard}','${ntn}','${address}','${ph1}','${ph2}','${ph3}','${opBalance}','${comments}')`;

    mysqlConnection.query(sql, (err, result) => {
      if (err) {
        if (err.code == "ER_DUP_ENTRY" || err.errno == 1062) {
          res.json({
            status: "success",
            message: "Customer already exist",
            payload: err,
          });
        } else {
          res.json({ status: "error", message: "Unknown Error", payload: err });
        }
      } else {
        res.json({ status: "success", message: "Customer succefully added." });
      }
    });
  } else {
    res.json({ status: "error", message: "Please enter name of customer." });
  }
});

Router.post("/bank", (req, res) => {
  if (req.body.name) {
    const {
      name,
      nameShop,
      idCard,
      ntn,
      address,
      ph1,
      ph2,
      ph3,
      opBalance,
      comments,
    } = req.body;

    const sql = `INSERT INTO cem_customers (name,shopname,idcard,ntn,address,ph1,ph2,ph3,balance,comments) VALUES ('${name}','${nameShop}','${idCard}','${ntn}','${address}','${ph1}','${ph2}','${ph3}','${opBalance}','${comments}')`;

    mysqlConnection.query(sql, (err, result) => {
      if (err) {
        if (err.code == "ER_DUP_ENTRY" || err.errno == 1062) {
          res.json({
            status: "success",
            message: "Customer already exist",
            payload: err,
          });
        } else {
          res.json({ status: "error", message: "Unknown Error", payload: err });
        }
      } else {
        res.json({ status: "success", message: "Customer succefully added." });
      }
    });
  } else {
    res.json({ status: "error", message: "Please enter name of customer." });
  }
});

module.exports = Router;
