class Stack {
  constructor() {
    this.storage = {};
  }

  push(value) {
    this.storage[Object.keys(this.storage).length] = value;
  }

  pop() {
    var storageReferences = this.storage;
    if (Object.keys(storageReferences).length > 0) {
      var currentFirst = storageReferences[Object.keys(storageReferences).length - 1];
      delete storageReferences[Object.keys(storageReferences).length - 1];
      return currentFirst;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }
}