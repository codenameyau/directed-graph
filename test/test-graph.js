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

  describe('.populateGraph()', function() {

    var graph = new Graph(data);

    it('should create a new vertex', function() {
      graph.addVertex('A');
      console.log(graph);
    });

    // it('should create a list of size neighbors', function() {
    //   assert.strictEqual(neighbors.length, vertices.length);
    // });

    // it('should create a list of Vertex objects', function() {
    //   var vertex = vertices[0];
    //   assert.property(vertex, 'weight');
    //   assert.property(vertex, 'neighbors');
    // });

  });
});
