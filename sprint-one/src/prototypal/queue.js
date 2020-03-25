var Queue = function() {
  var newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  if (Object.keys(this.storage).length === 0) {
    this.storage[0] = value;
  } else {
    this.storage[Math.max(...Object.keys(this.storage)) + 1] = value;
  }
};

queueMethods.dequeue = function () {
  var currentFirst = this.storage[Math.min(...Object.keys(this.storage))];
  delete this.storage[Math.min(...Object.keys(this.storage))];
  return currentFirst;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};
