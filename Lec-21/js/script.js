function getName() {
  // alert('hello');
  var n = document.getElementById("name").value;

  document.getElementById("display").innerHTML = n;
}

function keyDown() {
  document.getElementById("input-one").style.border = "1px solid red";
}

function keyUp() {
  document.getElementById("input-three").style.backgroundColor = "pink";
}

function blurEvent() {
  document.getElementById("input-two").style.backgroundColor = "yellow";
}

function handleChange() {
  var n = document.getElementById("input-four").value;
  console.log(n);
}

function mouseEvent() {
  document.getElementById("hi").style.fontSize = "30px";
}

//addEventListerner
// addEventListener(event name, callback function)

document.getElementById("click-button").addEventListener("click", function () {
  alert("hello");
});

function focusEvent() {
  document.getElementById("input-five").style.backgroundColor = "red";
}

document.getElementById("input-five").addEventListener("focus", focusEvent);

//e.preventDefault(): used to prevent the deafult behavior of any event
document.getElementById("amazon").addEventListener("click", function (e) {
  //whenever an event fires, we get a event object (e)
  console.log(e);
  e.preventDefault();
});

