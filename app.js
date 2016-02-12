var weather = require("./weather.js");
var location = require("./location.js");


weather(function (currentWeather) {
  console.log(currentWeather);
});

location(function (location) {
  if(!location) {
    console.log("Unable to find location...");
    return;
  }

  console.log("City: " + location.city);
  console.log("Log/Lat: " + location.loc);
});
