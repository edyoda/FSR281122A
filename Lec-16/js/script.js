// explicit
//number to string
console.log(String(20)); //"20"
// toString();
// toFixed();
// toExponential()

//boolean to string
console.log(String(true)); //"true"
console.log(String(false)); //"false"

// Objects
//property/value pair
//key/value pair

// 1. object literal
var person = {
  firstName: "alina",
  lastName: "joe",
  age: 20,
  isMarried: false,
  details: function () {},
};

//how to access these object
console.log(person["firstName"]);

console.log(person.firstName);
console.log(person.lastName);

// 2. object.create()
var car = {
  brand: "MS",
  color: "white",
  company: "xyz",
  price: 90909,
  model: "tui",
  mileage: "699",
  capacity: 4,
  abs: true,
  fuelType: "diesel",
};

var obj = Object.create(car);
console.log(obj.brand);

// 3. var x = new Person() Prototype (ES5)

// 4. const y = new Person() Class (ES6)

//delete a propert/key from a object
delete person.age;
// delete person["age"];

console.log(person);

//updation
person.firstName = "alex";
console.log(person);

//add new property inside a existing object
person.designation = "developer";
console.log(person);

// getting all the keys
console.log(Object.keys(person));

// getting all the values
console.log(Object.values(person));

console.log(false == null);
console.log(undefined == null);
console.log("null" == null);
console.log(false == NaN);
console.log("false" == false);


