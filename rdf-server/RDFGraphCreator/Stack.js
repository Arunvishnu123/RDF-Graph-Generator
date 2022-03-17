//Implementing Stack using arrays
class Stack {
    constructor() {
      // data is a normal array data type built into javascript
      this.data = [];
    }
    //It places the item on top of the stack
    push(item) {
      this.data.push(item);
    }
    // It removes an item from the top of the stack
    pop() {
      return this.data.pop();
    }
  
    // peek is to return the last record inside of our array without actually removing it.
    peek() {
      return this.data[this.data.length - 1];
    }
  }
  
  module.exports = Stack;
