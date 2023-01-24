//alone
console.log(this); //window

//inside function
function add() {
  console.log(this);
}

add();

//object
var obj = {
  firstName: "alex",
  //   this keyword will refer to obj
  lastName: this.firstName + "joe",
  fullName: function () {
    // this is referring to obj
    console.log(this.firstName + " " + this.lastName);
  },
  contact: {
    full: this,
    details: function () {
      console.log(this); //this will refer to contact
    },
  },
};

obj.fullName();

//class (ES6)
// to implement OOPs

//are the template of js object
class University {
  count = 0;

  //it is used to initialize values (property of University)
  constructor(name, age, dept) {
    // this is referring to University
    this.name = name;
    this.age = age;
    this.department = dept;
  }

  academicDetails() {
    console.log(this.department + " " + this.age);
  }
}

var studentOne = new University("alex", 19, "cse"); //creating instance of the object
console.log(studentOne);
studentOne.academicDetails();

var studentTwo = new University("alina", 20, "ece");
console.log(studentTwo);
studentTwo.academicDetails();

//through prototype (ES5)
//object constructor function
function Person(name, age) {
  // this will refer to Person
  this.name = name;
  this.age = age;
}

var pOne = new Person("harry", 20);
console.log(pOne);

//
var str = "hello";
var str = new String("hello"); //never use this
console.log(str.indexOf());

var num = 20;
var num = new Number(20); //never use this

// Inheritance
// parent class
class Shape {
  constructor(id) {
    this.id = id;
  }
}

//child/derived class
class Circle extends Shape {
  constructor(id, radius) {
    super(id); //call the parent constructor
    this.radius = radius;
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }
}

var c = new Circle(2, 4);
console.log(c);
console.log(c.circumference());

class Triangle extends Shape {
  constructor(id, type) {
    super(id);
    this.type = type;
  }
}

var t = new Triangle(3, "right-angled");
console.log(t);
// t.circumference(); //both child of same can't access each others data

//abstraction
class Abstract {
  constructor(text) {
    this.text = text;
  }

  doSomething() {
    //som logic
    throw new Error("You have to implement do something");
  }
}

class Der extends Abstract {
  constructor(text) {
    super(text);
  }

  doSomething() {
    console.log("Method implemented");
  }
}

var d = new Der("hello");
d.doSomething();

//
function add(a) {
  console.log(a);
}

add(10);

function add(a, b) {
  console.log(a + b);
}

add(20, 20);


//task
//create a University constructor function (prototype)
//name, age, marks, city, create one method inside it
//5 students want to enroll
//display their data  in UI 


//task on class
//create a class Car: city(),specialFeature()
//name, brand, color, manufacture

//create a class Book: type_of_book()
//no. of pages, type of pages, author

//create a class Animal: walk(), eat(), climb()
//gender, name, disease

//task on inheritance
//Inheritance: parent electronics (methods & properties: name, version, company name)
// child class(laptop, ipad, mobile, tablet)

// class child {
// configuration()
//price()
// }   


