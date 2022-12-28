//Arithmatic
var num = 10;
var numTwo = 20;

//operand
console.log(num + numTwo); //addition
console.log(num - numTwo); //subtraction
console.log(num * numTwo); //multiplication
console.log(numTwo / num); //division (quotient)
console.log(numTwo % num); //modulus (remainder)

// increment & decrement
num++; //num = num + 1
numTwo--; //numTwo = numTwo - 1
console.log(num, numTwo);

// pre & post inc/dec
var x = num++; //
// x = num;
// num = num + 1
console.log(x); //11
console.log(num); //12

//
var y = ++numTwo;
// numTwo = numTwo + 1
// y = numTwo
console.log(y);
console.log(numTwo);

//
var numVal = 20;
var r = numVal++;
// r = numVal;//20
// numVal = numVal + 1;//21
r--;
numVal++;
console.log(r); //19
console.log(numVal); //22

//
var t = ++numVal; //22
// numVal = numVal + 1;//23
// t = numVal;//23
t++;
console.log(t); //24
console.log(numVal); //23

console.log(++t); //25

console.log(t++);
console.log(t);

// Opeartor Precedence (priority of operator in execution)
// brackets
// / *
// + -
// L -> R

var result = 10 + (90 / 2) * 20 + 89 - 90;
console.log(result);

// Assignment operator (=)
var val = 20;
val += 5; //val = val + 5
val -= 5; //val = val - 5

console.log(typeof NaN); //number

// String Operator (+)
var str = "hello";
var strTwo = "world";
console.log(str + strTwo); //
console.log(str - strTwo); //NaN
console.log(str * strTwo); //NaN

console.log(str + 20); //"hello20"
console.log(20 + str);
console.log(20 + 40 + str); //
console.log(str + 20 + 40); //
console.log(20 * 20 + "world");
console.log("hello" + "world" / 2); //

// implicit coersion (automatic type conversion)
console.log("20" - 20); //
console.log("20" + 20);
console.log("" + 10); //"10"
console.log("10" / 10);
console.log(true > false); //
console.log(true + false > 2);

// numeric string: '7889'
// non-numeric: 'duh)*)(_)('
// alpha string: 'hjdk'

//operator predecence
//check type operand (number, numeric, non-numeric)
//result

console.log(null == undefined); //true
console.log(null === undefined); //

//Comaprison & Logical operators
var a = 10;
var b = "10";

console.log(a == b); //look for value
console.log(a === b); //look for value & datatype
console.log(a == "hello"); //

// conditional statement
// if
// //syntax
// if(condition) {
//     //block of code
// }

var firstName = "alex";
if (firstName === "alex") {
  console.log("correct");
}

// if else
if (true) {
  console.log("correct");
} else {
  console.log("incorrect");
}

// Ternary operator (condition) ? () : ()
var r = firstName == "alina" ? "correct" : "incorrect";
console.log(r);

// else if
var lastName = "joe";
if (firstName === "alina" && lastName === "joe") {
  console.log("correct");
} else if (firstName === "alex") {
  console.log(firstName);
} else if (lastName === "joe") {
  console.log(lastName);
} else {
  console.log("incorrect");
}

// switch
var age = 18;
//strict checking (===)
switch (age) {
  case 0:
    console.log("incorrect");
    break;
  case 2:
    console.log("incorrect");
    break;
  case 18:
    console.log("eligible");
    break;
  default:
    console.log("default");
}

//greatest of 3 numbers
var x = 100,
  y = 89,
  z = 100,
  max = 0;

if (x > y) {
  max = x;
} else {
  max = y;
}

if (max > z) {
  console.log(max + " is greatest");
} else {
  console.log(z + " is greatest");
}

// console.log(Math.max(x, y, z));

//check if a number is even or odd
var numEven = 20;

if (numEven !== 0) {
  if (numEven % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

//task
//using conditional statements
//given number is multiple of 3 or not e.g.10900
//check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not
//calculate simple interest ((p/r * t) * 100 )
//given year leap year or not (29 in feb): 2020
//0-6 display day week depending upon what user is entering (0-> sunday) : using switch

//ATM Machine and style it
//balance & query
//withdraw (amount)
//change pin
//mini statement
//saving & current acc.
//print receipt
//enter pin nunber

// Implicit coersion:
//practice questions on implicit coersion
// console.log('A' - 1);//
// console.log('A' + 1);//A1
// console.log(2 + '2' + '2');//
// console.log('hello' + 'world' + 89);//
// console.log('hello' - 'world' + 89);//
// console.log('hello' + 78);//
// console.log('78' - 90 + '2');//
// console.log(2 - '2' + 90);//
// console.log(89 - '90' / 2);//
//console.log(true == false) > 2

// practice expression with operators
// operator precedence (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

// practice on pre & post

//
//var numVal = 30;
//var u = --numVal;
//numVal++;
//console.log(u);//
//console.log(numVal);//

//
//var a = 40;
//var b = a++;
//b++;
//console.log(a);//
//console.log(b);//

//
// var f = 50;
// var g = f++;
// g--;
// console.log(g);//
// console.log(f);//

//
//var val = 10;
//val++;
//var h = --val;
//h++;
//console.log(h);
//console.log(val);

//
//var num = 20;
// num++;
// var t = ++num;
// num++;
// --num
// console.log(num, t);

//
//var num = 10;
// --num;
// var y = ++num + 10;
// --y;
// console.log(y);
// console.log(num);

//
//var num = 30;
// ++num;
// num++ - 10;
// console.log(num);
