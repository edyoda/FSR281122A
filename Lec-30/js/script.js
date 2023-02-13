// Array

//creating an array
var a = new Array([90, 10, 20, 30]); //don't use this

var arr = [90, 100, 78, 40]; //follow this

// Traversing
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Insert element in an array
arr.push(100);
arr.unshift(10);
console.log(arr);

//delete element in an array
arr.pop();
arr.shift();
console.log(arr);

//splice
arr.splice(1, 2, 200); //
console.log(arr);

// Merging
var arrTwo = [2, 3, 4, 5];

console.log(arr.concat(arrTwo));
console.log([...arr, ...arrTwo, 200]); //using spread operator

//Sorting
//Bubble sort
function bubbleSort(arr) {
  var isSwapped = false;

  for (var i = arr.length; i > 0; i--) {
    isSwapped = false;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //swap the positions
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }

  console.log(arr);
}

bubbleSort([90, 10, 9, 2, 30, 4]);

//Searching
// linear search
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 90) {
    console.log("found");
    break;
  }
}

// Binary search
function binarySearch(arr, ele) {
  var firstIndex = 0;
  var lastIndex = arr.length - 1;
  var middleIndex = Math.floor((firstIndex + lastIndex) / 2);

  while (arr[middleIndex] != ele && firstIndex <= lastIndex) {
    if (arr[middleIndex] > ele) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((firstIndex + lastIndex) / 2);
  }

  console.log(arr[middleIndex] === ele ? middleIndex : -1);
}

binarySearch([2, 3, 5, 7, 20, 100], 20);

binarySearch([10, 30, 50, 60, 100], 60);

