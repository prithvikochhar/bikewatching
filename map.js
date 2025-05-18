import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';
console.log('Mapbox GL JS Loaded:', mapboxgl);

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoicHJpdGh2aWtvY2hoYXIiLCJhIjoiY21hcjllajIzMDhqYjJscHZiZ3YxajNvMiJ9.QpB5ielJkH-kHdOSKUIuSQ';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the div where the map will render
  style: 'mapbox://styles/mapbox/streets-v12', // Map style
  center: [-71.09415, 42.36027], // [longitude, latitude]
  zoom: 12, // Initial zoom level
  minZoom: 5, // Minimum allowed zoom
  maxZoom: 18, // Maximum allowed zoom
});

map.on('load', async () => {
  map.addSource('boston_route', {
  type: 'geojson',
  data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson',
});
map.addLayer({
  id: 'bike-lanes',
  type: 'line',
  source: 'boston_route',
  paint: bikeLaneStyle
});

map.addSource('cambridge_route', {
  type: 'geojson',
  data: 'https://raw.githubusercontent.com/cambridgegis/cambridgegis_data/main/Recreation/Bike_Facilities/RECREATION_BikeFacilities.geojson',
});

map.addLayer({
  id: 'cambridge-bike-lanes',
  type: 'line',
  source: 'cambridge_route',
  paint: bikeLaneStyle
});

});

const bikeLaneStyle = {
  'line-color': '#32D400',  // A bright green using hex code
  'line-width': 4,          // Thicker lines
  'line-opacity': 0.5      // Slightly less transparent
};


