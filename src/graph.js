/*!
 * graph.js - Graph
 * MIT License (c) 2014
 * https://github.com/codenameyau/graph.js
 *
 * Description:
 * Library for weighted directed graphs
 *
 * The Graph is implemented as followed:
 * Graph (obj) -> Vertex (obj) -> Neighbor (obj) -> Weight (number)
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
    this.addNeighbors(key, neighbors[key]);
  }
};


/************************
 * Graph Public Methods *
 ************************/
Graph.prototype.getGraph = function() {
  return this.graph;
};

Graph.prototype.getSize = function() {
  return Object.keys(this.graph).length;
};

Graph.prototype.getSizeNeighbors = function(vertex) {
  return Object.keys(this.graph[vertex]).length;
};


/************************
 * Graph Vertex Methods *
 ************************/
Graph.prototype.hasVertex = function(name) {
  return this.graph.hasOwnProperty(name);
};

Graph.prototype.addVertex = function(name) {
  this.graph[name] = {};
};

Graph.prototype.removeVertex = function(name) {

};

Graph.prototype.addNeighbors = function(vertex, neighbors) {
  for (var i=0, len=neighbors.length; i<len; i++) {
    this.addEdge(vertex, neighbors[i]);
  }
};

Graph.prototype.getNeighbors = function(name) {
  return this.graph[name];
};


/**********************
 * Graph Edge Methods *
 **********************/
Graph.prototype.hasEdge = function(vertex, neighbor) {
  return this.graph[vertex].hasOwnProperty(neighbor);
};

Graph.prototype.addEdge = function(vertex, neighbor, weight) {
  this.graph[vertex][neighbor] = weight || 0;
};

Graph.prototype.removeEdge = function(vertex) {

};

Graph.prototype.getWeight = function(vertex, neighbor) {
  return this.graph[vertex][neighbor];
};

Graph.prototype.setWeight = function(vertex, neighbor, weight) {
  this.graph[vertex][neighbor] = weight;
};

module.exports = Graph;
