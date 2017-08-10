var map = L.map('map').setView([0, 0], 1);


var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

function onEachFeature(feature, layer) {
  var count = feature.properties.count.toLocaleString();
  layer.bindPopup(count);
}


// Create and add a solrHeatmap layer to the map
var solr = L.solrHeatmap('http://127.0.0.1:8983/solr/default-core', {
  // Solr field with geospatial data (should be type Spatial Recursive Prefix Tree)
  field: 'geo_srpt',

  // Set type of visualization. Allowed types: 'geojsonGrid', 'clusters' Note: 'clusters' requires LeafletMarkerClusterer
  type: 'geojsonGrid',
  // type: 'clusters',

  // Inherited from L.GeoJSON
  onEachFeature: onEachFeature
}).addTo(map);

solr.on('dataAdded', function(data) {
  $('#responseTime').html('Solr response time: ' + solr.responseTime + ' ms');
  var docsCount = solr.count;
  $('#numDocs').html('Number of docs: ' + docsCount.toLocaleString());
  $('#renderTime').html('Render time: ' + solr.renderTime + ' ms');
});


// An example of requestNearby in use with Leaflet click handlers
map.on('click', function (e) {
  solr.requestNearby(e.layerPoint);
});
solr.on('click', function (e) {
  solr.requestNearby(e.layerPoint);
});

solr.on('nearbyQueried', function(data) {
  var rect = L.rectangle(data.bounds);
  $('#pointQuery').html('Query returned: ' + data.response.numFound + ' results')
  rect.on('add', function() {
    setTimeout(function() {
      rect.removeFrom(map);
    }, 500)
  })  
  rect.addTo(map);
});
