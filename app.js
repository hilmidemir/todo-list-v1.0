const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  var day = today.toLocaleDateString("en-us", options);

  res.render("list", {kindOfDay: day});
});

app.post("/", function(req, res) {
  var item = req.body.newItem;
  console.log(item);
});



app.listen(port, function() {
  console.log("Server started on port " + port + "...");
});
