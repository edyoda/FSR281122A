//strings ('' or "")
var firstName = "alina"; //
var lastName = "joe";

//escape character
// alert(firstName + "\n" + lastName);

// index/position starts from 0
var str =
  "  front-end development: html, css, js are end the basic technologies of the front-end development    ";

console.log(str.length); //length of the string
console.log(str.indexOf("end", 10)); //return the index value of first occurence of a specified word
console.log(str.lastIndexOf("end")); //return the index value of last occurence of a specified word
console.log(str.search("end")); //return the index value of first occurence of a specified word
console.log(str.indexOf("world")); //-1
console.log(str.indexOf("")); //0

//extraction of string
console.log(str.slice(2, 10)); //return a string from 2nd index till 9th index
console.log(str.slice(4));

console.log(str.replace("end", "END"));
console.log(str.replaceAll("end", "END"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());
console.log(str.charAt(20)); //
console.log(str.charCodeAt(20));

console.log(str.endsWith(" ")); //

console.log(str.match(/end/g));

console.log(typeof str);

// Numeric string: '90909'
// non-numeric string: 'kchd_+___$%';
// alpha string: 'ijdokdok'
// alph- numeric: '89kjm'

// Number
var a = 10;
var b = 10.89;
console.log(typeof a);
console.log(typeof b);

// type conversion (explicit)
//number to string
console.log(a.toString()); //'10'
console.log(a.toFixed(3)); //'10.000'
console.log(a.toExponential(2));

//string to number
console.log(parseInt("8978jijo")); //8978
console.log(parseFloat("80.89")); //80.89
console.log(Number("78")); //78
console.log(Number("hello")); //NaN
console.log(Number("")); //0
console.log(Number("8990hejike8909")); //NaN

//Boolean (T or F)
console.log(20 > 0);
console.log(20 > 90);

// convert boolean to number
console.log(Number(true));
console.log(Number(false));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//undefined (absent or unknown value)
var num; //declare
console.log(num); //undefined
console.log(typeof num); //undefined

num = 20;
console.log(num);

//null (no value or empty value)
var numVal = null;
console.log(numVal); //null
console.log(typeof numVal); //object

numVal = 100;
console.log(numVal);

console.log(10 + 20);

//to capture user input
// function getName() {
//     var n = document.getElementById('name').value;
//     console.log(n);
// }

// Operators
// Comparison opeartors
var a = 9;
var b = "9";

console.log(a == b); //look for values
console.log(a === b); //look for value and datatype (strict checking)
console.log(a != 9); //look for value
console.log(b !== 9); //look for value and datatype (strict checking)
console.log(a > 10); //look for values
console.log(b < 10); //look for values
console.log(a >= 9);

// Logical Opeartors (&&, ||, !)
console.log(a == b && a === b); //if both conditions are true, it will true otherwise
console.log(a == b || a === b); //if anyone conditions is true, it will true otherwise
console.log((a == b || a === b) && a > 20);
console.log(!(a == b));

//task
//extract first five characters from a string ('gfuh ieiuei')
//get the length of a string and make it uppercase ('hduej dij')
//take a string, make it lowerscase and trim it (' BVHDBGSH ISJI  ')
//revise primitive datatype
//replace specified word in a string ('', '')
//practice parseInt, parseFloat