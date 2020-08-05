$(document).ready(function(){
   $("#mapper").click(function(){
      $("#map").show();
   })

   
	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1IjoidmVjdG9yMjU0IiwiYSI6ImNrZGdibmluNDI0MGkydXQ5aGdyNWdoN2wifQ.zE3Z--3B1hjMRoChCWwTKw';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11',
center: [0, 37], // starting position
zoom: 3 // starting zoom
});
 
// Add geolocate control to the map.
map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
zoom: 15,
enableHighAccuracy: true
},
trackUserLocation: true
})
);
$("#exit").click(function(){
   $("#map").hide();
})

});