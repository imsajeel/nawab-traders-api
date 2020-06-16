const express = require("express");
const Router = express.Router();

let currentDate = new Date();

Router.get("/", (req, res) => {
  res.send(
    `
    <title>Welcome Page</title>
    <h1>Welcome to our server</h1>
    <p>Learn more about this project on <a href="https://github.com/imsajeel">GitHub</a></p>
    <p style="text-align:right;">${currentDate}</p>
    <hr/>
    <p>Please contact <a href="https://facebook.com/imsajeelaalam">Sajeel Aalam</a></p>
    `
  );
});

module.exports = Router;
