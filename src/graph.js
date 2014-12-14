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
    this.addVertex(key);
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
  return this.getObjectSize(this.graph);
};

Graph.prototype.getSizeNeighbors = function(vertex) {
  return this.getObjectSize(this.graph[vertex]);
};

Graph.prototype.pathExists = function(start, target) {
  // Perform BFS
  var queue = [start];
  var visited = {start: 1};
  while (queue.length > 0) {
    var current = queue.shift();
    if (current === target) { return true; }
    for (var node in this.graph[current]) {
      if (!visited.hasOwnProperty(node)) {
        visited[node] = 1;
        queue.push(node);
      }
    }
  }
  return false;
};


/************************
 * Graph Vertex Methods *
 ************************/
Graph.prototype.hasVertex = function(name) {
  return this.graph.hasOwnProperty(name);
};

Graph.prototype.addVertex = function(name) {
  if (!this.hasVertex(name)) {
    this.graph[name] = {};
  }
};

Graph.prototype.removeVertex = function(name) {
  delete this.graph[name];
  for (var vertex in this.graph) {
    if (this.graph[vertex].hasOwnProperty(name)) {
      delete this.graph[vertex][name];
    }
  }
};

Graph.prototype.addNeighbors = function(vertex, neighbors) {
  for (var i=0, len=neighbors.length; i<len; i++) {
    var neighbor = neighbors[i];
    this.addVertex(neighbor);
    this.addEdge(vertex, neighbor);
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

Graph.prototype.removeEdge = function(vertex, neighbor) {
  delete this.graph[vertex][neighbor];
};

Graph.prototype.getWeight = function(vertex, neighbor) {
  return this.graph[vertex][neighbor];
};

Graph.prototype.setWeight = function(vertex, neighbor, weight) {
  this.graph[vertex][neighbor] = weight;
};


/**************************
 * Graph Internal Methods *
 **************************/
Graph.prototype.getObjectSize = function(object) {
  return Object.keys(object).length;
};


module.exports = Graph;
