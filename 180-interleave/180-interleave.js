class Queue {
  constructor() {
    this.data = {};
    this.first = 0;
    this.last = 0;
  }
  size() {
    return this.last - this.first;
  }
  dequeue() {
    const item = this.data[this.first];
    delete this.data[this.first];
    this.first++;
    return item;
  }
  enqueue(elem) {
    this.data[this.last] = elem;
    this.last += 1;
  }
}

let interleave = (stack) => {
  const n = stack.length;
  let q = new Queue();
  for (let i = 1; i < n; i++) {
    for (let j = i; j < n; j++) {
      q.enqueue(stack.pop());
    }
    const k = q.size();
    for (let j = 0; j < k; j++) {
      stack.push(q.dequeue());
    }
  }
  return stack;
};

let stack = [];
for (let i = 1; i < 7; i++) stack.push(i);
console.log(stack); // [1,2,3,4,5,6]
console.log(interleave(stack)); //[1,6,2,5,3,4]
