const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var week = [ "Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"];
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = week[0];
      break;
    case 1:
      day = week[1];
      break;
    case 2:
      day = week[2];
      break;
    case 3:
      day = week[3];
      break;
    case 4:
      day = week[4];
      break;
    case 5:
      day = week[5];
      break;
    case 6:
      day = week[6];
      break;
    default:
    console.log("Error: current day is equal to: " + currentDay);

  }
  res.render("list", {kindOfDay: day});
});


app.listen(port, function() {
  console.log("Server started on port " + port + "...");
});
