describe('L.SolrHeatmapBaseQueryAdapter', function() {
  it('base methods are defined', function() {
    var obj = new L.SolrHeatmapBaseQueryAdapter();
    expect(obj.initialize).toBeDefined();
    expect(obj.ajaxOptions).toBeDefined();
    expect(obj.responseFormatter).toBeDefined();
  });
  describe('initialize', function() {
    it('sets the options', function() {
      var that = {};
      var obj = new L.SolrHeatmapBaseQueryAdapter({yolo: 'foo'}, that);
      expect(obj.options.yolo).toBe('foo')
    });
  });
});
describe('L.SolrHeatmapQueryAdapters', function() {
  it('all adhear to required interface', function() {
    Object.keys(L.SolrHeatmapQueryAdapters).forEach(function(key) {
      var obj = new L.SolrHeatmapQueryAdapters[key]();
      expect(obj.initialize).toBeDefined();
      expect(obj.ajaxOptions).toBeDefined();
      expect(obj.responseFormatter).toBeDefined();
    });
  });
});
