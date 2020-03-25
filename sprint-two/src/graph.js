var Graph = function () {
  this.nodeCollection = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.nodeCollection.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return this.nodeCollection.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  let index = this.nodeCollection.indexOf(node);
  this.nodeCollection.splice(index, 1);

  this.edges.forEach((currentEdge, i) => {
    if (currentEdge.toString().includes(node.toString())) this.edges.splice(i, 1);
  });
};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  let pair = [];
    fromNode > toNode
      ? pair = [toNode, fromNode]
      : pair = [fromNode, toNode];

  return this.edges.toString().includes(pair.toString())
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  let edge = [];
  fromNode > toNode
    ? edge = [toNode, fromNode]
    : edge = [fromNode, toNode];

  this.edges.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  let edge = [];
  fromNode > toNode
    ? edge = [toNode, fromNode]
    : edge = [fromNode, toNode];

  this.edges.forEach((currentEdge, i) => {
    if (currentEdge.toString() === edge.toString()) this.edges.splice(i, 1);
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (callback) {
  this.nodeCollection.forEach((node) => callback(node));
};

/*
 * Complexity: What is the time complexity of the above functions?

 addNode = O(1)
 removeNode = O
 addEdge
 removeEdge
 hasEdge
 contains
 forEachNode
 */
var graph = new Graph();