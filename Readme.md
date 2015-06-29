# Leaflet-Solr-Heatmap

A Leaflet plugin that visualizes heatmap facets from Solr 5.x

## Using with Leaflet

```javascript
// Create a SolrHeatmap layer and add it to the map
var solr = L.solrHeatmap('http://127.0.0.1:8983/solr/gettingstarted', {
  // Solr field with geospatial data (should be type Spatial Recursive Prefix Tree)
  field: 'loc_srpt',

  // Set type of visualization. Allowed types: 'geojsonGrid', 'clusters'
  // Note: 'clusters' requires LeafletMarkerClusterer
  type: 'geojsonGrid'
}).addTo(map);
```

Option | Type | Default | Description
------ | ---- | ------- | -----------
`field` | `String` | `null` | *Required.* Solr field with geospatial data (should be type Spatial Recursive Prefix Tree)
`type` | `String` | `'geojsonGrid'` | Type of visualization. Accepts `geojsonGrid` and `clusters`
`solrRequestHandler` | `String` | `'select'` | Request handler for Solr

## Running locally

Download required libraries for example (Leaflet, Leaflet MarkerClusterer, jQuery)
```sh
bower install
```

(Optional) Install packages for running local server
```sh
npm install
```

Start local server
```sh
grunt
```

View the example at [http://127.0.0.1:8000/example/](http://127.0.0.1:8000/example/)