var Stack = function () {
  var newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  return newInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[Object.keys(this.storage).length] = value;
};

stackMethods.pop = function () {
  var storageReferences = this.storage;
  if (Object.keys(storageReferences).length > 0) {
    var currentFirst = storageReferences[Object.keys(storageReferences).length - 1];
    delete storageReferences[Object.keys(storageReferences).length - 1];
    return currentFirst;
  }
};

stackMethods.size = function () {
  return Object.keys(this.storage).length;
};