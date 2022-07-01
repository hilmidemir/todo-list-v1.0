const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port = 3000;
const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  var day = today.toLocaleDateString("en-us", options);

  res.render("list", {kindOfDay: day, newListItem: items});
});

app.post("/", function(req, res) {
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});



app.listen(port, function() {
  console.log("Server started on port " + port + "...");
});
