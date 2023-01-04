// for loops
// 1 loop = 1 iteration

// syntax
// for(statement1; statement2; statement 3) {
//     //block of code
// }

// statement 1 -> intialization
// statement 2 -> condition
// statement 3 -> inc/dec

// steps of execution
// st1 -> st2 -> BOC -> st3 -> st2 -> BOC so on...

for (var j = 10; j >= 0; j--) {
  console.log(j); //10 9 8 7 6 5 4 3 2 1 0
}

for (var i = 1; i <= 20; i = i + 2) {
  console.log(i); //1 3 5
}

for (var i = 4; i < 10; i++) {
  console.log(i); //4 5 6 7 8 9
}

//display array elements
var arr = [90, 100, 290, 90, 89, 78]; //6
console.log(arr);

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]); //
}

//reverse an array
for (var t = arr.length - 1; t >= 0; t--) {
  console.log(arr[t]);
}

//iterate over string
var str = "hello";

var i = 0;
for (; i < str.length; ) {
  console.log(str[i]);
  i++;
}

//while
// syntax
// while(condition) {
//block of code
// }

var z = 10;
while (z > 4) {
  console.log(z); //10 9 8 7 6 5
  z--;
}

// do while
// syntax
// do {
//     //Block of code
// }while(condition)

var j = 20;
do {
  console.log(j); //20
  j--;
} while (j > 21);

//infinte loops

//break: it will terminate the loop
//continue: it will terminate the current iteration

var num = [90, 89, 78, 67, 45, 45];

for (var i = 0; i < num.length; i++) {
  if (num[i] === 67) {
    console.log(num[i] + " is found");
    break;
  }
}

for (var i = 0; i < num.length; i++) {
  console.log(num[i]);
  break;
}

//continue
for (var i = 0; i < num.length; i++) {
  console.log(num[i]);
  continue;
  console.log(i);
}

for (var i = 1; i <= 10; i++) {
  if (i == 6) {
    continue;
  }
  console.log(i);
}

//remove duplicate
var arrVal = [90, 89, 78, 67, 45, 45, 90, 67];
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
console.log(outArr);
console.log(exists);

//sum of two
var arr = [6, 4, 3, 2, 1, 7];
var val = 9;

for (var i = 0; i < arr.length - 1; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === val) {
      console.log(true);
      break;
    }
  }
}
