'use strict';

var assert = require('assert');
var Graph = require('../src/graph');


/**********************
 * Test Suite: Vertex *
 **********************/

describe('Graph', function() {

  describe('.defineVertices()', function() {
    it('should create a list of Vertex objects', function(done) {
      var testGraph = new Graph(10);
      assert.equal(10, testGraph.vertices.length);
      done();
    });

  });

});
