// GET Request
// https://jsonplaceholder.typicode.com/posts/
// https://jsonplaceholder.typicode.com/users
// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001

// https://rapidapi.com/ - try to use movie API

// API's : Application Program Interface

//get request
function getData() {
  var xttp = new XMLHttpRequest();
  xttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    } else {
      console.log("Failed request");
    }
  };

  xttp.open("GET", "https://jsonplaceholder.typicode.com/posts/", true);
  xttp.send();
}

// //Post Request
// https://reqres.in/api/users

// {
//     "name": "morpheus",
//     "job": "leader"
// }

function sendData() {
  var xttp = new XMLHttpRequest();

  xttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
      document.getElementById("loading").style.display = "none";
      document.getElementById("posted").innerHTML = "Posted succesfully";
      console.log(this.responseText);
    } else {
      document.getElementById("loading").style.display = "block";
    }
  };

  //data will be sent to database through API
  var postObj = {
    name: "morpheus",
    job: "leader",
  };

  var post = JSON.stringify(postObj);

  xttp.open("POST", "https://reqres.in/api/users", true);
  xttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xttp.send(post);
}

// var arr = [90, 10, 29];
// console.log(arr[7]);
// console.log(t);

//error handling
function getName() {
  var n = document.getElementById("name").value;

  try {
    if (n.trim() == "") {
      throw "This field is required";
    } else if (n.trim().length < 3) {
      throw "Please enter valid name";
    } else {
      console.log(n);
    }
  } catch (e) {
    console.log(e);
  } finally {
    console.log("captured data");
  }
}

