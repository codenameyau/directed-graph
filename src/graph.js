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
    this.addNeighbors(key, neighbors);
  }
};


/************************
 * Graph Public Methods *
 ************************/
Graph.prototype.getSize = function() {
  return Object.keys(this.graph).length;
};

Graph.prototype.getSizeNeighbors = function(vertex) {
  return Object.keys(this.graph[vertex]).length;
};

Graph.prototype.hasVertex = function(name) {
  return this.graph.hasOwnProperty(name);
};

Graph.prototype.hasNeighbor = function(vertex, neighbor) {
  return this.graph[vertex].hasOwnProperty(neighbor);
};

Graph.prototype.addVertex = function(name) {
  this.graph[name] = {};
};

Graph.prototype.getVertex = function(name) {
  return this.graph[name];
};

Graph.prototype.addEdge = function(vertex, neighbor, weight) {
  this.graph[vertex][neighbor] = weight || 0;
};

Graph.prototype.addNeighbors = function(vertex, neighbors) {
  for (var i=0, len=neighbors.length; i<len; i++) {
    this.addEdge(vertex, neighbors[i]);
  }
};

module.exports = Graph;
