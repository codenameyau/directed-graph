'use strict';

var Graph = require('../src/graph');
var chai = require('chai');
var assert = chai.assert;


/**********************
 * Test Suite: Graph *
 **********************/
describe('Graph', function() {

  var data = {
    'A': ['B', 'C'],
    'B': ['C', 'D'],
    'C': ['B', 'D'],
    'D': ['B', 'C']
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
      assert.property(graph.graph, 'A');
      assert.property(graph.graph, 'B');
      assert.property(graph.graph, 'C');
      assert.property(graph.graph, 'D');
    });
  });


  describe('.addVertex()', function() {
    var graph = new Graph();

    it('should create a new vertex if it does not exist', function() {
      assert.strictEqual(graph.getSize(), 0);
      graph.addVertex('A');
      assert.strictEqual(graph.getSize(), 1);
      assert.property(graph.graph, 'A');
    });

    it('should not create a new vertex that already exists', function() {
      graph.addVertex('A');
      assert.strictEqual(graph.getSize(), 1);
    });
  });


  describe('.addEdge()', function() {
    var graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    it('should add an edge from A to B', function() {
      graph.addEdge('A', 'B');
      assert.lengthOf(graph.getVertex('A'), 1);
      assert.lengthOf(graph.getVertex('B'), 0);
    });

    it('should add an edge from A to C', function() {
      graph.addEdge('A', 'C');
      assert.lengthOf(graph.getVertex('A'), 2);
      assert.lengthOf(graph.getVertex('C'), 0);
    });

    it('should add an edge from B to A and C to A', function() {
      graph.addEdge('B', 'A');
      graph.addEdge('C', 'A');
      assert.lengthOf(graph.getVertex('B'), 1);
      assert.lengthOf(graph.getVertex('C'), 1);
    });
  });

});
