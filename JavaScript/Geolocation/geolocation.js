//geolocation
//automatic and accurate, user friendly,
//used on both mobile (gps) and desktop (wifi)


//navigator object has two objects:
//1. getCurrentPosition

// function callback(position){

// }
// navigator.geolocation.getCurrentPosition(callback);

$("#error").hide();
$("#hud").show();

navigator.geolocation.getCurrentPosition(gotLocation);

function gotLocation(currentPosition) {
  $("#hud").hide();

  var $restaurants = $("span");
  
  $restaurants.each(function(){
    var restaurantLatitude = $(this).data("lat");
    var restaurantLongitude = $(this).data("lon");
    
    var distanceInMiles = calculateDistance(currentPosition.coords.latitude, currentPosition.coords.longitude, restaurantLatitude, restaurantLongitude);
    
    $(this).text(distanceInMiles + " miles");
  });
}

function displayError(message) {
  $("#error").text(message).slideDown("slow");
}