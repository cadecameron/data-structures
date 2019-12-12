var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.storage[Object.keys(this.storage).length] = value;
};

Stack.prototype.pop = function () {
  var storageReferences = this.storage;
  if (Object.keys(storageReferences).length > 0) {
    var currentFirst = storageReferences[Object.keys(storageReferences).length - 1];
    delete storageReferences[Object.keys(storageReferences).length - 1];
    return currentFirst;
  }
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};
