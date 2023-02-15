// FIFO
class Quene {
  constructor() {
    this.items = [];
  }

  enquene(ele) {
    this.items.push(ele);
  }

  dequene() {
    this.items.shift();
  }

  front() {
    return this.items[0];
  }

  rear() {
    return this.items[this.items.length - 1];
  }

  printQuene() {
    for (var i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

var q = new Quene();

//addition in a quene
q.enquene(10);
q.enquene(20);
q.enquene(40);
q.enquene(6);
q.enquene(7);

// deletion in a quene
q.dequene();

//get the front
console.log(q.front());

//get the rear
console.log(q.rear());

q.printQuene();

var qTwo = new Quene();
qTwo.enquene(2);
qTwo.enquene(10);
qTwo.enquene(23);
qTwo.enquene(20);

// merge the quene
var result = [];
function mergeQuene(a, b) {
  while (a.length != 0) {
    result.push(a[0]);
    a.shift();
  }

  while (b.length != 0) {
    result.push(b[0]);
    b.shift();
  }

  console.log(result);
}

mergeQuene(q.items, qTwo.items);

//task
//sorting algo in quene
