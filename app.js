const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port = 3000;
const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = ""; 

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

  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res) {

  let item = req.body.newItem;

  if(req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work")
  }else{
    items.push(item);
    res.redirect("/");
  }
  
});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems})
});

app.post("/work", function() {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});



app.listen(port, function() {
  console.log("Server started on port " + port + "...");
});
