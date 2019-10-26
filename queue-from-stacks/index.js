// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'push', 'pop', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.push(1);
//     q.push(2);
//     q.peek();  // returns 1
//     q.pop(); // returns 1
//     q.pop(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stackA = new Stack()
    this.stackB = new Stack()
  }

  add(record) {
    this.stackA.push(record)
  }

  remove() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop())
    }

    return this.stackB.pop()
  }

  peek() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop())
    }

    return this.stackB.peek()
  }
}

module.exports = Queue;
