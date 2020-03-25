var BinarySearchTree = function (value) {
  var obj = {};
  obj.left;
  obj.right;
  obj.value = value;

  obj.insert = function (inputValue) {
    if (obj.value > inputValue) {
      if (obj.left !== undefined) {
        obj.left.insert(inputValue);
      } else {
        obj.left = new BinarySearchTree(inputValue);
      }
    } else if (obj.value < inputValue) {
      if (obj.right !== undefined) {
        obj.right.insert(inputValue);
      } else {
        obj.right = new BinarySearchTree(inputValue);
      }
    }
  };

  obj.contains = function (inputValue) {
    var found = false;
    //console.log("Currently checking for ", inputValue)


    var searchTree = function (tree) {
      if (tree.value === inputValue) {
        found = true;
        //console.log('Found true value!');
        return;
      } else {
        if ((inputValue < tree.value) && (tree.left !== undefined)) {
          searchTree(tree.left);
        } else if ((inputValue > tree.value) && (tree.right !== undefined)) {
          searchTree(tree.right);
        }
      }
    };
    searchTree(this);
    return found;
  };

  obj.depthFirstLog = function (cb) {
    cb(obj.value);

    if (obj.left) {
      obj.left.depthFirstLog(cb);
    }
    if (obj.right) {
      obj.right.depthFirstLog(cb);
    }

  };
  return obj;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
