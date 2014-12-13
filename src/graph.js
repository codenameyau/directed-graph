/*!
 * graph.js - Graph
 * MIT License (c) 2014
 * https://github.com/codenameyau/graph.js
 *
 * Description:
 * Library for weighted directed and undirected graph
 *
 * Implementation:
 * The Graph is implemented as an array of Neighbors
 * which contains a adjacency list of Vertices
 */
'use strict';

var Vertex = require('./vertex');


/*********************
 * Graph Constructor *
 *********************/
function Graph(numVertices) {
  this.vertices = [];
  this.graph = [];
  this.defineVertices(numVertices);
}

Graph.prototype.defineVertices = function(numVertices) {
  for (var i=0; i<numVertices; i++) {
    this.vertices.push(new Vertex());
  }
};

// Graph.prototype.define = function(graphlist) {
//   for (var i=0, len=graphlist.length; i<len; i++) {
//     var newNeighbors =
//     this.data.push(new Neighbor(graphlist[i]));
//   }
// };

module.exports = Graph;
