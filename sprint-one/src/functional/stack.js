var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function () {
    if (Object.keys(storage).length > 0) {
      var currentFirst = storage[Object.keys(storage).length - 1];
      delete storage[Object.keys(storage).length - 1];
      return currentFirst;
    }
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};
