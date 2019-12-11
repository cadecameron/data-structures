var Stack = function () {
  var newInstance = {};
  newInstance.storage = {};
  extend(newInstance, stackMethods);
  return newInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage[Object.keys(this.storage).length] = value;
  },

  pop: function () {
    var storageReferences = this.storage;
    if (Object.keys(storageReferences).length > 0) {
      var currentFirst = storageReferences[Object.keys(storageReferences).length - 1];
      delete storageReferences[Object.keys(storageReferences).length - 1];
      return currentFirst;
    }

  },

  size: function () {
    return Object.keys(this.storage).length;
  },
};

var extend = function(ob1, ob2) {
  for (let key in ob2) {
    ob1[key] = ob2[key];
  }
};

