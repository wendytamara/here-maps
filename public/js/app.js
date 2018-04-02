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
      x.value = position.coords.latitude + ' ' + position.coords.longitude;
    })
    

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
        center: { lat: latitud, lng: longitud }
        });

        console.log(latitud);
        console.log(longitud);
  }

  
  // console.log(latitud);
  // console.log(longitud);

// Initialize the platform object:




