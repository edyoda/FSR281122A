// we are using arary to create a stack

class Stack {
  constructor() {
    this.items = [];
  }

  pushInStack(ele) {
    this.items.push(ele);
  }

  popInStack() {
    if (this.items.length == 0) {
      return "underflow";
    }
    return this.items.pop();
  }

  //   top
  peek() {
    return this.items[this.items.length - 1];
  }

  printStack() {
    for (var i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

var stack = new Stack();

//add element to a stack
stack.pushInStack(20);
stack.pushInStack(30);
stack.pushInStack(40);
stack.pushInStack(50);

//delete element in a stack
stack.popInStack();

// getting the top
console.log(stack.peek());

//traverse/display
stack.printStack();

//Sorting & Merging in stack
var res = [];
var tmpStack = [];

function sortStack(res) {
  while (res.length != 0) {
    let tmp = res[res.length - 1]; //top element always
    res.pop();

    while (tmpStack.length != 0 && tmpStack[tmpStack.length - 1] > tmp) {
      res.push(tmpStack[tmpStack.length - 1]);
      tmpStack.pop();
    }

    //push elemen in temp stack
    tmpStack.push(tmp);
  }
}

function merge(s1, s2) {
  while (s1.length != 0) {
    res.push(s1[s1.length - 1]);
    s1.pop();
  }

  while (s2.length != 0) {
    res.push(s2[s2.length - 1]);
    s2.pop();
  }

  console.log(res);

  sortStack(res);
}

//creating a stack
let st1 = [];
let st2 = [];

//adding element to stacks
st1.push(20);
st1.push(50);
st1.push(10);

st2.push(3);
st2.push(4);
st2.push(100);

merge(st1, st2); // merging a stack

//displaying the sorted stack
while (tmpStack.length != 0) {
  console.log(tmpStack[tmpStack.length - 1]);
  tmpStack.pop();
}


// task
// implement binary search for stack