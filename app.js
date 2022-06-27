const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  if (currentDay === 6 || currentDay === 0) {
    day = "Weekend";
  }else {
    day = "Weekday";
  }
  res.render("list", {kindOfDay: day});
});


app.listen(port, function() {
  console.log("Server started on port " + port + "...");
});
