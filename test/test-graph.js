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
    'B': ['C', 'A'],
    'C': ['B', 'D'],
    'D': ['B', 'C']
  };

  var search = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F', 'G'],
    'E': ['H'],
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

    it('should create edges between vertices and their neighors', function() {
      assert.isTrue(graph.hasEdge('A', 'B'));
      assert.isTrue(graph.hasEdge('A', 'C'));
      assert.isTrue(graph.hasEdge('B', 'C'));
      assert.isTrue(graph.hasEdge('B', 'A'));
      assert.isTrue(graph.hasEdge('C', 'B'));
      assert.isTrue(graph.hasEdge('C', 'D'));
      assert.isTrue(graph.hasEdge('D', 'B'));
      assert.isTrue(graph.hasEdge('D', 'C'));
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
    graph.addVertex('D');

    it('should add an edge from A to B', function() {
      graph.addEdge('A', 'B');
      assert.strictEqual(graph.getSizeNeighbors('A'), 1);
      assert.strictEqual(graph.getSizeNeighbors('B'), 0);
      assert.isTrue(graph.hasEdge('A', 'B'));
      assert.isFalse(graph.hasEdge('B', 'A'));
    });

    it('should add an edge from A to C', function() {
      graph.addEdge('A', 'C');
      assert.strictEqual(graph.getSizeNeighbors('A'), 2);
      assert.strictEqual(graph.getSizeNeighbors('C'), 0);
      assert.isTrue(graph.hasEdge('A', 'C'));
      assert.isFalse(graph.hasEdge('C', 'A'));
    });

    it('should add an edge from B to A and C to A', function() {
      graph.addEdge('B', 'A');
      graph.addEdge('C', 'A');
      assert.strictEqual(graph.getSizeNeighbors('B'), 1);
      assert.strictEqual(graph.getSizeNeighbors('C'), 1);
      assert.isTrue(graph.hasEdge('B', 'A'));
      assert.isTrue(graph.hasEdge('C', 'A'));
    });

    it('should have a weighted edge from A to D', function() {
      var weight = 10;
      var neighborsA = graph.getNeighbors('A');
      graph.addEdge('A', 'D', weight);
      assert.isTrue(graph.hasEdge('A', 'D'));
      assert.strictEqual(neighborsA.B, 0);
      assert.strictEqual(neighborsA.C, 0);
      assert.strictEqual(neighborsA.D, weight);
    });
  });


  describe('.setWeight()', function() {
    var graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');

    it('should change the weight from edge A to B', function() {
      var newWeight = 100;
      assert.strictEqual(graph.getWeight('A', 'B'), 0);
      graph.setWeight('A', 'B', newWeight);
      assert.strictEqual(graph.getWeight('A', 'B'), newWeight);
    });
  });


  describe('.removeVertex()', function() {
    var graph = new Graph(data);

    it('should make sure that vertex B has connected edges', function() {
      assert.isTrue(graph.hasEdge('A', 'B'));
      assert.isTrue(graph.hasEdge('B', 'C'));
      assert.isTrue(graph.hasEdge('B', 'A'));
      assert.isTrue(graph.hasEdge('C', 'B'));
      assert.isTrue(graph.hasEdge('D', 'B'));
      assert.strictEqual(graph.getSizeNeighbors('A'), 2);
      assert.strictEqual(graph.getSizeNeighbors('C'), 2);
      assert.strictEqual(graph.getSizeNeighbors('D'), 2);
    });

    it('should remove vertex B from the graph', function() {
      graph.removeVertex('B');
      assert.isFalse(graph.hasVertex('B'));
    });

    it('should remove all edges connected to the vertex', function() {
      assert.strictEqual(graph.getSizeNeighbors('A'), 1);
      assert.strictEqual(graph.getSizeNeighbors('C'), 1);
      assert.strictEqual(graph.getSizeNeighbors('D'), 1);
    });
  });


  describe('.removeEdge()', function() {
    var graph = new Graph(data);

    it('should assert that vertices A and B are connected', function() {
      assert.isTrue(graph.hasEdge('A', 'B'));
      assert.isTrue(graph.hasEdge('B', 'A'));
      assert.strictEqual(graph.getSizeNeighbors('A'), 2);
      assert.strictEqual(graph.getSizeNeighbors('B'), 2);
    });

    it('should remove the edge from A to B', function() {
      graph.removeEdge('A', 'B');
      assert.isFalse(graph.hasEdge('A', 'B'));
      assert.strictEqual(graph.getSizeNeighbors('A'), 1);
    });

    it('should remove the edge from B to A', function() {
      graph.removeEdge('B', 'A');
      assert.isFalse(graph.hasEdge('B', 'A'));
      assert.strictEqual(graph.getSizeNeighbors('B'), 1);
    });
  });


  describe('.BFS()', function() {
    var graph = new Graph(search);
    console.log(graph);
  });

});
