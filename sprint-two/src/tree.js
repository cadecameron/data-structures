var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);

  // children property contains an array with a number of subtrees
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var found = false;
  var traverseChildren = function (child) {
    if (child.value === target) {
      found = true;
    } else {
      for (var i = 0; i < child.children.length; i++) {
        traverseChildren(child.children[i]);
      }
    }
  }
  traverseChildren(this);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
addChild = O(1)
contains = O(n)
 */
