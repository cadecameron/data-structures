var Queue = function () {
  var newInstance = {};
  newInstance.storage = {};
  extend(newInstance, queueMethods);
  return newInstance;
};

var queueMethods = {
  enqueue: function (value) {
    if (Object.keys(this.storage).length === 0) {
      this.storage[0] = value;
    } else {
      this.storage[Math.max(...Object.keys(this.storage)) + 1] = value;
    }
  },

  dequeue: function () {
    var currentFirst = this.storage[Math.min(...Object.keys(this.storage))];
    delete this.storage[Math.min(...Object.keys(this.storage))];
    return currentFirst;
  },

  size: function () {
    return Object.keys(this.storage).length;
  }
};

var extend = function (ob1, ob2) {
  for (let key in ob2) {
    ob1[key] = ob2[key];
  }
};