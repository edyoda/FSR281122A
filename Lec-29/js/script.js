// storing in data
window.localStorage.setItem("age", 20);

sessionStorage.setItem("designation", "developer");

//getting the data
document.getElementById("display").innerHTML = localStorage.getItem("age");

//

$(document).ready(function () {
  $("#display").text();
});

//
function create() {
  var x = document.createElement("div");
  return x;
}

function hello() {
  var t = create();
}


