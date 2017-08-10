describe('L.SolrHeatmap', function() {
  var div;
  var map;
  
  beforeEach(function() {
    div = document.createElement('div');
    div.style.width = '800px';
    div.style.height = '600px';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    map = L.map(div, {
    });
  });

  afterEach(function() {
    document.body.removeChild(div);
  });

  describe('initialize', function() {
    var solrLayer = new L.SolrHeatmap('http://127.0.0.1:8983/solr/default-core', {
      field: 'stuff'
    });
    it('merges options', function() {
      expect(solrLayer.options.field).toBe('stuff')
      expect(solrLayer.options.type).toBe('geojsonGrid')
    });
  });

  describe('adds a SolrHeatmap layer', function() {
    var solrLayer;

    it('with heatmap polygons on map', function(done) {
      solrLayer = L.solrHeatmap('http://127.0.0.1:8983/solr/default-core', {
        field: 'geo_srpt',
        type: 'geojsonGrid'
      })//.addTo(map);
      solrLayer.on('dataAdded', function() {
        expect(Object.keys(solrLayer._layers).length).toBe(52);
        done();
      });
      map.addLayer(solrLayer);
    });
  });
});
    
