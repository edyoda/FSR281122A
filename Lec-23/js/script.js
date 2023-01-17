console.log(window);

var a = 20;
console.log(window.a);

function add() {
  console.log(10 + 20);
}

window.add();

// window.alert('Hi');

// window = {
//     a: 20,
//     add: function () {

//     }
// }

//screen object: contains information about user's screen
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.screen.colorDepth);

//location object:
console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.protocol);
console.log(location.port);

//history object
// history.back();
// history.forward();

//navigator object
console.log(navigator.appCodeName);
console.log(navigator.appName);
console.log(navigator.cookieEnabled);
console.log(navigator.language);
console.log(navigator.product);

//
// window.confirm()
// window.prompt()

//callback
function subtract(a, b, c) {
  var sub = a - b;
  c(sub);
}

subtract(10, 6, function (s) {
  console.log(s);
});

//
window.setTimeout(function () {
  console.log("hello");
}, 4000);

// 1 second = 1000 millisecond

window.setInterval(function () {
  var d = new Date();
  //   console.log(d.getFullYear());
  document.getElementById("display-clock").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}, 1000);

console.log("world");
