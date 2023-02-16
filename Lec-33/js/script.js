// Linked list

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element);
    console.log(node);

    var current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      console.log(current);
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  deleteNode(key) {
    var temp = this.head,
      prev = null;

    if (temp != null && temp.element != key) {
      prev = temp;
      temp = temp.next;
    }

    // if key is not present
    if (temp == null) return;

    // unlink the node from linked list
    prev.next = temp.next;

    this.size--;
  }

  sizeOfList() {
    return this.size;
  }

  search(x) {
    var current = this.head;

    while (current != null) {
      if (current.element == x) {
        console.log("exist");
        break;
      }
      current = current.next; //going to next
    }

    // console.log("not exist");
  }

  printList() {
    var current = this.head;
    while (current != null) {
      console.log(current.element);
      current = current.next;
    }
  }
}

var list = new LinkedList();

//insertion
list.add(10);
list.add(20);
list.add(50);
list.add(2);
list.add(30);

//deletion
list.deleteNode(2); //second node

//size/length of linked list
console.log(list.sizeOfList());

list.search(50);

//traversing
list.printList();

//merging of linked list

function merge(L1, L2) {
  var L3 = new Node(null);
  var prev = L3;

  while (L1 != null && L2 != null) {
    if (L1.element <= L2.element) {
      prev.next = L1;
      L1 = L1.next;
    } else {
      prev.next = L2;
      L2 = L2.next;
    }

    prev = prev.next;
  }

  if (L1 == null) {
    prev.next = L2;
  }

  if (L2 === null) {
    prev.next = L1;
  }

  return L3.next;
}

var listTwo = new LinkedList();

listTwo.add(3);
listTwo.add(6);
listTwo.add(7);
listTwo.add(8);

var listData = merge(list.head, listTwo.head);
console.log(listData);

while (listData.next) {
  console.log(listData.next.element);
  listData = listData.next;
}

//task
//sorting linked list
