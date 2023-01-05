// function declaration
// syntax
// function name() {
//     //block of code
// }

// name();//function calling
//function is executed, after it is being called

function add() {
  //block of code
  console.log(10 + 20);
}

//calling function from js file
add();
add();

//parameterized function
//parameters - a, b
function subtract(a, b) {
  var sub = a - b;
  console.log(sub);
}

subtract(20, 10); //arguments
subtract(100, 30); //

var num = 10; //global scope
console.log(num);

//passing function as a value
function subtractNumbers(a, b) {
  //local scope
  var sub = a - b - num;
  return sub;
}

// console.log(sub);//this will give error

var r = subtractNumbers(100, 50);
console.log(r);

var s = subtractNumbers(20, 8);
console.log(s);

//self-invoking functions
(function () {
  console.log(20 * 10);
})();

//
(function (x, y) {
  console.log(x * y);
})(20, 9);

//
function removeDuplicate(arrVal) {
  var exists = {},
    outArr = [],
    elm;

  for (var i = 0; i < arrVal.length; i++) {
    elm = arrVal[i];
    if (!exists[elm]) {
      outArr.push(elm);
      exists[elm] = true;
    }
  }

  return outArr;
}

var r = removeDuplicate([90, 89, 78, 67, 45, 45, 90, 67]);
console.log(r);

//hoisting
z = 90; //initialization
console.log(z); //using
var z; //declaration

//
var x; //declare
console.log(x); //use

x = 90; //initialize

//ideal way
var x = 90;

// task
// create parametized method/function to multiply 3 numbers
// create parametized method to divide 2 numbers
// and display result in console, UI

// From 1 to 100, print "foo" if multiple of 3, "bar" if multiple of 5, if
// multiple of both display "hello" or else print the number
// e.g.
// 1
// 2
// foo
// 4
// bar
// foo-->
