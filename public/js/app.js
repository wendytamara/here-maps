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
  zoom: 10,
  center: { lat: -12.0463731, lng: -77.042754 }
  });