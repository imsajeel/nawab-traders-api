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
      shopname,
      idCard,
      ntn,
      address,
      ph1,
      ph2,
      ph3,
      balance,
      comments,
    } = req.body;

    const sql = `INSERT INTO cem_customers (name,shopname,idcard,ntn,address,ph1,ph2,ph3,balance,comments) VALUES ('${name}','${shopname}','${idCard}','${ntn}','${address}','${ph1}','${ph2}','${ph3}','${balance}','${comments}')`;

    mysqlConnection.query(sql, (err, result) => {
      if (err) {
        const { code, errno } = err;
        if (err.code == "ER_DUP_ENTRY" || err.errno == 1062) {
          res.json({
            status: "error",
            message: "Customer already exist",
            payload: { code, errno },
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
      address,
      ph1,
      ph2,
      ph3,
      email,
      op_balance,
      comment,
    } = req.body;

    const sql = `INSERT INTO cem_supplier (name, address, ph1, ph2, ph3, email_sup, op_balance, comment) VALUES ('${name}','${address}','${ph1}','${ph2}','${ph3}','${email}','${op_balance}','${comment}')`;

    mysqlConnection.query(sql, (err, result) => {
      if (err) {
        const { code, errno } = err;
        if (err.code == "ER_DUP_ENTRY" || err.errno == 1062) {
          res.json({
            status: "error",
            message: "Supplier already exist",
            payload: { code, errno },
          });
        } else {
          res.json({ status: "error", message: "Unknown Error", payload: err });
        }
      } else {
        res.json({ status: "success", message: "Supplier succefully added." });
      }
    });
  } else {
    res.json({ status: "error", message: "Please enter name of supplier." });
  }
});

Router.post("/bank", (req, res) => {
  if (req.body.name) {
    const {
      title_acc,
      name,
      branch,
      branch_code,
      ph,
      email,
      address,
      op_balance,
    } = req.body;

    const sql = `INSERT INTO cem_bank (title_acc,name,branch,branch_code,ph,email,address,op_balance) VALUES ('${title_acc}','${name}','${branch}','${branch_code}','${ph}','${email}','${address}','${op_balance}')`;

    mysqlConnection.query(sql, (err, result) => {
      if (err) {
        const { code, errno } = err;
        if (code == "ER_DUP_ENTRY" || errno == 1062) {
          res.json({
            status: "error",
            message: "Bank already exist",
            payload: { code, errno },
          });
        } else {
          res.json({ status: "error", message: "Unknown Error", payload: err });
        }
      } else {
        res.json({ status: "success", message: "Bank succefully added." });
      }
    });
  } else {
    res.json({ status: "error", message: "Please enter name of Bank." });
  }
});

module.exports = Router;
