const express = require("express");
const mysqlConnection = require("../connection");
const bcrypt = require("bcrypt");

const Router = express.Router();

Router.post("/", (req, res) => {
  const { username, password } = req.body;
  mysqlConnection.query(
    `SELECT * from users WHERE username="${username}"`,
    (err, rows, feilds) => {
      if (err) {
        console.log(err);
      } else {
        if (!rows[0]) {
          res.json("User not found");
        } else {
          bcrypt.compare(password, rows[0].hash, function (err, result) {
            const { iduser, username, typeuser, active } = rows[0];
            if (result == true) {
              if (active === "true") {
                res.json({
                  id: 1,
                  status: "success",
                  payload: {
                    iduser,
                    username,
                    typeuser,
                  },
                  message: "Succefully logged in.",
                });
              } else {
                res.json("Permission denied! Please contact admin");
              }
            } else {
              res.send("Incorrect password");
            }
          });
        }
      }
    }
  );
});

module.exports = Router;
