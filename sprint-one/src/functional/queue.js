var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function (value) {
    if (Object.keys(storage).length === 0) {
      storage[0] = value;
    } else {
      storage[Math.max(...Object.keys(storage)) + 1] = value;
    }
  };

  someInstance.dequeue = function () {
    var currentFirst = storage[Math.min(...Object.keys(storage))];
    delete storage[Math.min(...Object.keys(storage))];
    return currentFirst;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};
