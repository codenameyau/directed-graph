/*!
 * graph.js - Vertex
 * MIT License (c) 2014
 * https://github.com/codenameyau/graph.js
 *
 * Description:
 * Library for weighted directed and undirected graph
 *
 * Implementation:
 * The Graph is implemented as an array of Neighbors
 * which contains a list of Vertices
 */
'use strict';


/**********************
 * Vertex Constructor *
 **********************/
function Vertex(weight) {
  this.weight = weight;
}

Vertex.prototype.setWeight = function(value) {
  this.weight = value;
};

module.exports = Vertex;
