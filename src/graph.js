/*!
 * graph.js - Vertex
 * MIT License (c) 2014
 * https://github.com/codenameyau/graph.js
 *
 * Description:
 * Library for weighted directed graphs
 *
 * Implementation:
 * The Graph is implemented as an object of Vertex objects
 */
'use strict';


/*********************
 * Graph Constructor *
 *********************/
function Graph(neighbors) {
  this.graph = {};
  this.populateGraph(neighbors);
}

Graph.prototype.populateGraph = function(neighbors) {
  for (var key in neighbors) {

    // Create new vertex if not exist
    if (!this.hasVertex(key)) {
      this.addVertex(key);
    }

    // Connect vertex to neighbors
    for (var i=0, len=neighbors.length; i<len; i++) {
      this.addEdge(key, neighbors[i]);
    }

  }
};


/************************
 * Graph Public Methods *
 ************************/
Graph.prototype.hasVertex = function(name) {
  return this.graph.hasOwnProperty(name);
};

Graph.prototype.addVertex = function(name) {
  this.graph[name] = [];
};

Graph.prototype.addEdge = function(vertex, neighbor, weight) {
  weight = weight || 0;
  this.graph[vertex].append({weight: weight, neighbor: neighbor});
};

module.exports = Graph;
