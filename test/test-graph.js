'use strict';

var Graph = require('../src/graph');
var chai = require('chai');
var assert = chai.assert;


/**********************
 * Test Suite: Graph *
 **********************/
describe('Graph', function() {

  var data = {
    'A': ['B', 'C', 'D'],
    'B': ['C', 'D'],
    'C': ['A', 'D'],
    'D': ['A', 'B']
  };


  describe('.getSize()', function() {
    var graph = new Graph(data);

    it('should return the number of vertices in the graph', function() {
      assert.strictEqual(graph.getSize(), 4);
    });

    it('should not increase adding a vertex that already exists', function() {
      graph.addVertex('A');
      assert.strictEqual(graph.getSize(), 4);
    });

    it('should be increased by 1 when a new vertex is added', function() {
      graph.addVertex('F');
      assert.strictEqual(graph.getSize(), 5);
    });
  });


  describe('.populateGraph()', function() {
    var empty = new Graph();
    var graph = new Graph(data);

    it('should be empty if the graph argument is not specified', function() {
      assert.strictEqual(empty.getSize(), 0);
    });

    it('should populate the graph with the specified vertices', function() {
      assert.strictEqual(graph.getSize(), 4);
    });
  });


  describe('.addVertex()', function() {
    var graph = new Graph(data);

    it('should not create a new vertex that already exists', function() {
      graph.addVertex('A');
      assert.strictEqual(graph.getSize(), 4);
    });

    it('should create a new vertex if it does not exist', function() {
      graph.addVertex('Z');
      assert.strictEqual(graph.getSize(), 5);
      assert.property(graph.graph, 'Z');
    });
  });

});
