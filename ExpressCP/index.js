var express = require("express");
var app = express();
var time = new Date();
var port = 8080;

//set view engine to EJS
app.set("view engine", "ejs");

//set the views folder
app.set("views", "./views");

const myLogger = function (req, res, next) {
  console.log("Latest request received at " + time.toLocaleString());
};

app.get("/", (req, res) => {
  res.render("Home");
  myLogger();
});
app.get("/ourServices", (req, res) => {
  res.render("OurServices");
  myLogger();
});
app.get("/contactUs", (req, res) => {
  res.render("ContactUs");
  myLogger();
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
