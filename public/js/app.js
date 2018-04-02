  // API DE HTML 5 GEOLOCATION

  var x = document.getElementById("demo");
  var btn = document.getElementById("btn");
  
  window.onload = function getLocation() {
    var latitud = '';
    var longitud = '';
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }

  
  
  function showPosition(position) {

    latitud = position.coords.latitude;
    longitud = position.coords.longitude;
 
    btn.addEventListener('click', function(){
      var lat = Number(position.coords.latitude.toFixed(4));
      var log = Number(position.coords.longitude.toFixed(4));
      x.value = lat + ' ' + log
    })
    

  
    function moveMapToBerlin(map){
      map.setCenter({lat:-12.0566, lng:-76.961});
      map.setZoom(14);
    }
    
    
    /**
     * Boilerplate map initialization code starts below:
     */
    
    //Step 1: initialize communication with the platform
    var platform = new H.service.Platform({
      app_id: 'dtSI2axPe5QEr4QN4Bmd',
      app_code: 'cciCXXxEAcSyxCtSkOFyZg',
      useCIT: true,
      useHTTPS: true
    });
    var defaultLayers = platform.createDefaultLayers();
    
    //Step 2: initialize a map  - not specificing a location will give a whole world view.
    var map = new H.Map(document.getElementById('map'),
      defaultLayers.normal.map);
    
    //Step 3: make the map interactive
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    
    // Create the default UI components
    var ui = H.ui.UI.createDefault(map, defaultLayers);
    
    // Now use the map as required...
    moveMapToBerlin(map);

  }

  



