/*!
 * graph.js - Vertex
 * MIT License (c) 2014
 * https://github.com/codenameyau/graph.js
 *
 * Description:
 * Library for weighted directed and undirected graph
 *
 * Implementation:
 * The Graph is implemented as an object of Vertex objects
 */
'use strict';

var Vertex = require('./vertex');


/*********************
 * Graph Constructor *
 *********************/
function Graph(neighbors) {
  this.graph = {};
  this.populateGraph(neighbors);
}

Graph.prototype.populateGraph = function(neighbors) {
  for (var key in neighbors) {
    if (!this.hasVertex(key)) {
      this.addVertex(key);
    }
  }
};


/************************
 * Graph Public Methods *
 ************************/
Graph.prototype.hasVertex = function(name) {
  return this.graph.hasOwnProperty(name);
};

Graph.prototype.addVertex = function(name, edges) {
  var reference = this;
  this.graph[name] = {
    vertex: new Vertex(name),
  };
};



module.exports = Graph;
