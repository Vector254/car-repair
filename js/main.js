
$(document).ready(function(){
   $("#mapper").click(function(){
      $("#map").show();
   })

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
// statics counter
$(document).ready(function() {

   $('.counter').each(function () {
   $(this).prop('Counter',0).animate({
   Counter: $(this).text()
   }, {
   duration: 4000,
   easing: 'swing',
   step: function (now) {
   $(this).text(Math.ceil(now));
   }
   });
   });
   
   });
//end of the counter code

function shareIssue (){
    var name = document.getElementById("names").value;
    var lastOne = document.getElementById("lastName").value;
    var carModel = document.getElementById("carselect").value;
    var issues = document.getElementById("issue").value;
    var resolve = document.getElementById("fix").value;

    if(name=="") {
        alert("")
    };
        
};
