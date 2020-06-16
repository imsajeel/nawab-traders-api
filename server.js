const express = require("express");
const bodyParser = require("body-parser");

const signin = require("./routes/signin");
const register = require("./routes/register");

const app = express();
app.use(bodyParser.json());

// app.get("/", home);

const public = __dirname + "/public";
app.use("/", express.static(public));
app.use("/error", express.static(public + "/error.html"));
app.use("/register", register);
app.use("/signin", signin);

app.listen(3000);
console.log("App is running on 3000");
