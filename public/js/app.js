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
  
  function showPosition(position) {
    latitud = position.coords.latitude.toFixed(4);
    longitud = position.coords.longitude.toFixed(4);
    localStorage.lati = latitud;
    localStorage.longi = longitud;

    btn.addEventListener('click', function(){
      x.value = latitud + ' ' + longitud
      moveMapToBerlin(map)
    })
    
// Instantiate the Platform class with authentication and
// authorization credentials:

var campText = document.getElementById('camp-text');

function moveMapToBerlin(map){
  map.setCenter({lat:latitud, lng:longitud});
  map.setZoom(14);
}

var platform = new H.service.Platform({
  app_id: 'dtSI2axPe5QEr4QN4Bmd',
  app_code: 'cciCXXxEAcSyxCtSkOFyZg',
  useCIT: true,
  useHTTPS: true
});

var defaultLayers = platform.createDefaultLayers();

// Crear una instancia de un mapa dentro del elemento DOM con id map. los
// map center está en San Francisco, el nivel de zoom es 10:
var map = new H.Map(document.getElementById('map'),
defaultLayers.normal.map);

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Crea un objeto de grupo para contener marcadores de mapa:
var group = new H.map.Group();

// Crea los componentes de UI predeterminados:
var ui = H.ui.UI.createDefault(map, platform.createDefaultLayers());

// Add the group object to the map:
map.addObject(group);

// Obtener un objeto de búsqueda a través del cual enviar la búsqueda
   // peticiones:
var search = new H.places.Search(platform.getPlacesService()),

searchResult, error;

var btnSearch = document.getElementById('btnSearch');
var campText = document.getElementById('camp-text');
btnSearch.addEventListener('click', capturingValueInput);
// campText.addEventListener('keyup', capturingValueInput);

var input = '';
function capturingValueInput(event) {
  event.preventDefault();
  input = campText.value;
  var params = {
// Búsqueda de texto simple para lugares con la palabra "hotel"
     // asociado a ellos:
  'q': input,
 // Buscar en el distrito de Chinatown en San Francisco:
  'at': latitud +','+ longitud
  };

   localStorage.lati = latitud;
   localStorage.longi = longitud;
   search.request(params, {}, onResult, onError);
}

// Define una función de devolución de llamada para manejar datos en caso de éxito:

function onResult(data) {
  addPlacesToMap(data.results);
  showTemplate(data.results);
}

// Define a callback function to handle errors:
function onError(data) {
  error = data;
}

var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
moveMapToBerlin(map);

// Esta función agrega marcadores al mapa, indicando cada uno de
     // los lugares ubicados

function addPlacesToMap(result) {
  group.addObjects(result.items.map(function (place) {
    var marker = new H.map.Marker({lat: place.position[0],
    lng: place.position[1]})
  return marker;
  }));
}


 var templateCard = $('#templateCard');
  function showTemplate(result){
    templateCard.empty();
    var resultado = result.items;
    var placesItems = resultado.map(function (places, index) {
        var template = ` <div class="row">
          <div class="col s12">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${places.title}</span>
                <p>${places.vicinity}</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>`;

        templateCard.append(template);

       });
    }
  }
}
  



