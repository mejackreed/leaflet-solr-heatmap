var map = L.map('map').setView([0, 0], 2);

var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

function onEachFeature(feature, layer) {
  var count = feature.properties.count.toString();
  layer.bindPopup(count);
}

var solr = L.solr('http://127.0.0.1:8983/solr/gettingstarted', {
  onEachFeature: onEachFeature,
  type: 'geojsonGrid'
  // type: 'clusters'
}).addTo(map);