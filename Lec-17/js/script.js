// arrays
//array elements
//index/position starts from 0
var num = [20, 89, 70, 100, 67, 100, 100]; //array of number
var color = ["pink", "red", "blue", "orange"]; //array of strings
var mix = [undefined, 89, "hello", true, null];

console.log(num);
console.log(color);
console.log(mix);

//to access particular element
console.log(num[2]);

console.log(num.length);
console.log(color.length);

console.log(typeof num);
console.log(typeof color);
console.log(typeof mix);

// verification of arrays
console.log(Array.isArray(num));

//convert array to string
console.log(num.toString()); //'20, 89, 70, 67, 100'
console.log(num.join("*"));
console.log(num.join(""));

//convert string to array
var str = "h-e-ll-o";
console.log(str.split("-"));

var strVal = "wor ld";
console.log(strVal.split(""));

//push & pop
num.pop(); //remove last elment from an array
console.log(num);

num.push(200); //add element at the end of an array
console.log(num);

// shift and unshift
num.shift(); //used to remove element from the start of an array
console.log(num);

num.unshift(100); //to add new element at the start of an array
console.log(num);

//to add & remove element in the middle/between of an array, we can use splice method
color.splice(1, 2, "white", "black", "violet"); //start of index,  number of elements to be deleted, new elements to be added
console.log(color);

//delete
color.splice(2, 1);
console.log(color);

//add
color.splice(2, 0, "blue");
console.log(color);

// num[2] = 'hello';
// console.log(num);

//concat
var concatedArray = num.concat(color, mix);
console.log(concatedArray);

//reverse an array
num.reverse();
console.log(num);

//extract
var extractedArr = num.slice(0, 3); //return an array from 0th till 2nd index
console.log(extractedArr);

//
console.log(num.indexOf(70));

//
console.log(num.lastIndexOf(100));

//
console.log(num.includes(100));

//array of objects
var persons = [
  {
    name: "alina",
    age: 30,
    designation: "developer",
  },
  {
    name: "harry",
    age: 33,
    designation: "testing",
  },
  {
    name: "alex",
    age: 20,
    designation: "developer",
  },
];

persons[0].age = 90;
console.log(persons);
console.log(persons[1].age);

//task
//create employee data using array of objects
//display first 3 elements in an array (in UI)
//remove 4th (index) element and add 2 element there
//find the duplicate in a string (use array)  - optional
//reverse a string (use array method)
