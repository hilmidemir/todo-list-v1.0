const express = require("express");
const bodyParser = require("body-parser")

const port = 3000;
const app = express();

app.use('view engine', 'ejs');

app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0) {
    res.write("Sonunda Tatil laaggn");
    res.send();
  }else {
    res.write("Kalk nazif öss yi kaçırdın.");
    res.write("Kalk nazif öss yi kaçırdınnnnnn.");
    res.send();
  }

});




app.listen(port, function() {
  console.log("Server started on port " + port + "...");
});
