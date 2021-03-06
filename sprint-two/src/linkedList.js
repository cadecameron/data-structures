var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    };
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var container = list.head;
      list.head = list.head.next;
      return container.value;
    }
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      };
    }
    return false;
  };
  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail = O(1)
 removeHead = O(1)
 contains = O(n)
 */
