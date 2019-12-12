class Queue {
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    if (Object.keys(this.storage).length === 0) {
      this.storage[0] = value;
    } else {
      this.storage[Math.max(...Object.keys(this.storage)) + 1] = value;
    }
  }

  dequeue() {
    var currentFirst = this.storage[Math.min(...Object.keys(this.storage))];
    delete this.storage[Math.min(...Object.keys(this.storage))];
    return currentFirst;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
