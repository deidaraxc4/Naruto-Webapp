jQuery(document).ready(function($) {
$.ajax({
url : "https://api.wunderground.com/api/907ae4a3425c97d7/geolookup/conditions/q/autoip.json",
dataType : "jsonp",
success : function(parsed_json) {
var city = parsed_json['location']['city'];
var state = parsed_json['location']['state'];
var temp_f = parsed_json['current_observation']['temp_f'];
var condition = JSON.stringify(parsed_json['current_observation']['weather']).replace(/['"]+/g, '');
//alert("Current temperature in " + city + state +" is: " + temp_f + " it is "+condition);
document.getElementById("location").innerHTML = city+" "+state;
document.getElementById("status").innerHTML = "is currently "+condition+ " " +temp_f+ "°F";
var myBackground = document.querySelector("#picture");
var myMusic = document.getElementById('audio');
var myStatus = document.getElementById('status');
if (condition == "Clear") {
  myBackground.style.backgroundImage = "url('../images/clear.jpg')";
  myMusic.src='/sounds/Go.mp3';
} else if (condition == "Partly Cloudy") {
  myBackground.style.backgroundImage = "url('../images/clear.jpg')";
  myMusic.src='/sounds/Go.mp3';
} else if (condition == "Rain") {
  myBackground.style.backgroundImage = "url('../images/rain.jpg')";
  myMusic.src='/sounds/SadnessSorrow.mp3';
} else if (condition == "Drizzle") {
  myBackground.style.backgroundImage = "url('../images/rain.jpg')";
  myMusic.src='/sounds/SadnessSorrow.mp3';
} else if (condition == "Thunderstorms") {
  myBackground.style.backgroundImage = "url('../images/rain.jpg')";
  myMusic.src='/sounds/SadnessSorrow.mp3';
} else if (condition == "Overcast") {
  myBackground.style.backgroundImage = "url('../images/overcast.jpg')";
  myMusic.src='/sounds/Wind.mp3';
} else if (condition == "Scattered Clouds") {
  myBackground.style.backgroundImage = "url('../images/overcast.jpg')";
  myMusic.src='/sounds/Go.mp3';
} else if (condition == "Snow") {
  myBackground.style.backgroundImage = "url('../images/snow.jpg')";
  myMusic.src='/sounds/SadnessSorrow.mp3';
} else if (condition == "Mostly Cloudy") {
  myBackground.style.backgroundImage = "url('../images/cloudy.jpg')";
  myMusic.src='/sounds/Go.mp3';
} else if (city == ""){
  myStatus.innerHTML = "Oops, something went wrong we couldn't get your location";
}
    }
  });
});
