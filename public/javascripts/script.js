jQuery(document).ready(function($) {
$.ajax({
url : "http://api.wunderground.com/api/907ae4a3425c97d7/geolookup/conditions/q/autoip.json",
dataType : "jsonp",
success : function(parsed_json) {
var location = parsed_json['location']['city'];
var temp_f = parsed_json['current_observation']['temp_f'];
var condition = JSON.stringify(parsed_json['current_observation']['weather']);
alert("Current temperature in " + location + " is: " + temp_f + " it is "+condition);
document.getElementById("brand").innerHTML = condition;
    }
  });
});
