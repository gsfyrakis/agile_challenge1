
$(document).ready( function(){
	$( ".searchBtn" ).bind( "click", function(event, ui) {
	  showAddress();
	});
});

var geocoder = new google.maps.Geocoder();
var marker ;
 var map;
 
function geocodePosition(pos) {
  geocoder.geocode({
    latLng: pos
  }, function(responses) {
    if (responses && responses.length > 0) {
      updateMarkerAddress(responses[0].formatted_address);
    } else {
      updateMarkerAddress('Cannot determine address at this location.');
    }
  });
}

//function updateMarkerStatus(str) {
 // document.getElementById('markerStatus').innerHTML = str;
//}

function updateMarkerPosition(latLng) {
  document.getElementById('info').innerHTML = [
    latLng.lat().toString().substr(0, 12),
    latLng.lng().toString().substr(0, 12)
  ].join(', ');
}

function updateMarkerAddress(str) {
  document.getElementById('address').innerHTML = str;
}

//initialization
function initialize() {
var visitor_lat=51.549751;
var visitor_lon=-0.177498;


  var latLng = new google.maps.LatLng(visitor_lat, visitor_lon);
  map = new google.maps.Map(document.getElementById('mapCanvas'), {
    zoom: 6,
    center: latLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
   marker = new google.maps.Marker({
    position: latLng,
    title: 'Point A',
    map: map,
    draggable: true
  });
  
  // Update current position info.
  updateMarkerPosition(latLng);
  geocodePosition(latLng);
  
  // Add dragging event listeners.
  google.maps.event.addListener(marker, 'dragstart', function() {
    updateMarkerAddress('Dragging...');
  });
  
  google.maps.event.addListener(marker, 'drag', function() {
   // updateMarkerStatus('Dragging...');
    updateMarkerPosition(marker.getPosition());
  });
  
  google.maps.event.addListener(marker, 'dragend', function() {
    //updateMarkerStatus('Drag ended');
    geocodePosition(marker.getPosition());
  });
  
   // Create the search box and link it to the UI element.
  var input = (document.getElementById('pac-input'));
  //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  var searchBox = new google.maps.places.SearchBox((input));

  
	
}
 
  function showAddress() {
  var address = document.getElementById('pac-input').value;
	  var geocoder = new google.maps.Geocoder();
          geocoder.geocode({ 'address': address }, function (results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                  parseLocation(results[0].geometry.location);
				  updateMarkerAddress(results[0].formatted_address);
              }
              else
                alert('error: ' + status);

          });
      }
    
	

  function parseLocation(location) {

      updateMarkerPosition(location);
	  marker.setPosition( new google.maps.LatLng( location.lat(), location.lng()) );
      map.panTo( new google.maps.LatLng( location.lat(), location.lng()) );
	  map.setZoom(8);
    }
	
	

google.maps.event.addDomListener(window, 'load', initialize);