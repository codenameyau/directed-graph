'use strict';

var Graph = require('../src/graph');
var chai = require('chai');
var assert = chai.assert;


/**********************
 * Test Suite: Graph *
 **********************/
describe('Graph', function() {

  describe('.defineVertices()', function() {
    var graph = new Graph();

    it('should create a new vertex', function() {
      graph.addVertex('A');
      assert.strictEqual()
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
