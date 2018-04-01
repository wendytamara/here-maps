// Initialize the platform object:
var platform = new H.service.Platform({
  'app_id': 'dtSI2axPe5QEr4QN4Bmd',
  'app_code': 'cciCXXxEAcSyxCtSkOFyZg'
});
  
  // Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();
  
// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  maptypes.normal.map,
  {
    zoom: 11,
    center: { lat: -12.0463731,
lng: -77.042754 }
  });

var x = document.getElementById('demo');
  
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }
}
  
function showPosition(position) {
  x.innerHTML = 'Latitude: ' + position.coords.latitude + 
      '<br>Longitude: ' + position.coords.longitude;
}
