//local storage
//add the data in the localstorage

function displayName() {
  var name = document.getElementById("name").value;
  localStorage.setItem("firstName", name);
  localStorage.setItem("lastName", "joe");
}

document.getElementById("display").innerHTML =
  localStorage.getItem("firstName");

// session Storage
sessionStorage.setItem("firstName", "alex");

document.getElementById("display").innerHTML =
  sessionStorage.getItem("firstName");

//AJAX

function getData() {
  var xttp = new XMLHttpRequest(); //object
  xttp.onreadystatechange = function () {
    // this keyword is referring to xttp
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      console.log(this.statusText);
      document.getElementById("get-data").innerHTML = this.responseText;
    }
  };

  //simple get request
  //   open(method, url, async(true))
  //   xttp.open("GET", "demo_get.asp", true);
  //   xttp.send();

  // with json file
  xttp.open("GET", "data.json", true);
  xttp.send();
}

// get request: ready state = 4, status code = 200

// JSON -> stringyfy & parse
var obj = JSON.parse('{"name": "alex", "age": "20"}');
console.log(obj);

//
var t = JSON.stringify(obj);

console.log(t);
