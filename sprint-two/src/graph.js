

// Instantiate a new graph
var Graph = function() {
    this.nodeCollection = [];
    this.edges  = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.nodeCollection.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    return this.nodeCollection.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    var index = this.nodeCollection.indexOf(node);
    this.nodeCollection.splice(index, 1);

    for (let i = 0; i < this.edges.length; i++) {
        if (this.edges[i].toString().includes(node.toString())) { // this only checks for literal string occurances, not numbers!
            this.edges.splice(i, 1);
        }
    }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    var pair = [];
    if (fromNode > toNode) {
        pair = [toNode, fromNode];
    } else {
        pair = [fromNode, toNode];
    }

    return this.edges.toString().includes(pair.toString())
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    var edge = [];
    if (fromNode > toNode) {
        edge = [toNode, fromNode];
    } else {
        edge = [fromNode, toNode];
    }
    this.edges.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    var edge = [];
    if (fromNode > toNode) {
        edge = [toNode, fromNode];
    } else {
        edge = [fromNode, toNode];
    }

    for (let i = 0; i < this.edges.length; i++) {
        if (this.edges[i].toString() === edge.toString()) {
            this.edges.splice(i, 1);
        }
    }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    this.nodeCollection.forEach(function(node) {
        cb(node);
    });
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


