//jshint esversion:6

// That formul export our function's return and it allow us use in the main page

// The function what we wanna do
module.exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  return day = today.toLocaleDateString("en-us", options);
}

// we can write without module the ejs allow us for this
exports.getDay = function () {
  const today = new Date();
  const options = {
    weekday: "long"
  }
  return day = today.toLocaleDateString("en-us", options);
}
