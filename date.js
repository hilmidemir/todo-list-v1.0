//jshint esversion:6

// That formul export our function's return and it allow us use in the main page
getDate = getDate;

// The function what we wanna do
module.exports.getDate = function () {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  let day = today.toLocaleDateString("en-us", options);
}

module.exports.getDay = getDay;
function getDay() {
  let today = new Date();
  let options = {
    weekday: "long"
  }
  let day = today.toLocaleDateString("en-us", options);
}
