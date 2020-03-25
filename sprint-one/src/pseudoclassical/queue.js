var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  if (Object.keys(this.storage).length === 0) {
    this.storage[0] = value;
  } else {
    this.storage[Math.max(...Object.keys(this.storage)) + 1] = value;
  }
};

Queue.prototype.dequeue = function () {
  var currentFirst = this.storage[Math.min(...Object.keys(this.storage))];
  delete this.storage[Math.min(...Object.keys(this.storage))];
  return currentFirst;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};