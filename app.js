const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");

//We use the paranthesis in the app.js becouse we want the function run only working
//console.log(date());

const port = 3000;
const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

//Import Body parser assigments and express folder usages
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Import ejs for usage
app.set('view engine', 'ejs');

// seting up home route and rendered something
app.get("/", function(req, res) {

  //We use the paranthesis in the app.js becouse we want the function run only working
  const day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res) {

  let item = req.body.newItem;
  console.log(item);
  if(req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
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

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(port, function() {
  console.log("Server started on port " + port + "...");
});
