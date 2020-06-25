const express = require("express");
const bodyParser = require("body-parser");

const signin = require("./routes/signin");
const register = require("./routes/register");
const customers = require("./routes/customers");
const bank = require("./routes/bank");
const brands = require("./routes/brands");
const add = require("./routes/add");

const app = express();
app.use(bodyParser.json());

// app.get("/", home);

const public = __dirname + "/public";
app.use("/", express.static(public));
app.use("/error", express.static(public + "/error.html"));
app.use("/register", register);
app.use("/signin", signin);
app.use("/customers", customers);
app.use("/bank", bank);
app.use("/add", add);
app.use("/brands", brands);

app.listen(3001);
console.log("App is running on 3001");
