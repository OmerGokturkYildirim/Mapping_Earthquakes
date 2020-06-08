// Creating tile layer

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    
    maxZoom: 18,

    accessToken: API_KEY

});

// Creating dark view tile layer

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    
    maxZoom: 18,
    
    accessToken: API_KEY

});


// Creating light view tile layer

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    
    maxZoom: 18,
    
    accessToken: API_KEY

    });

// Creating  base layer
let baseMaps = {

    "Streets": streets,

    "Satellite Streets": satelliteStreets,

    "Light":light

  };

// Creating earthquake layer

let earthquakes = new L.layerGroup();

// Creating map object

let map = L.map('mapid', {

    center: [39.5, -98.5],

    zoom: 3,

    layers: [streets]

})

// Creating the earthquake and tectonic plates layer

let earthquakes = new L.LayerGroup();

let tectonicplates = new L.LayerGroup();

let overlays = {

    Earthquakes: earthquakes,
    
    TectonicPlates: tectonicPlates
    
  };
//Creating control for the map

  L.control.layers(baseMaps, overlays).addTo(map);

//Accessing the earthquakes GeoJSON URL.

let earthQuakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//Accessing the tectonic paltes GeoJSON URL.

let tectonicPlates = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"
