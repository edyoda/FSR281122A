console.log(document.getElementById("display").id);

var list = document.getElementsByClassName("item");
console.log(list); //like an array

var arr = [];
for (var i = 0; i < list.length; i++) {
  console.log(list[i].textContent);
  arr.push(list[i].innerHTML);
}

console.log(arr);

//query selector
console.log(document.querySelector(".item").innerHTML);

//query selector all
var data = document.querySelectorAll(".item");
console.log(data);

document.getElementsByTagName("p"); //return a collection

//creating a dom node
var element = document.createElement("div");
element.innerHTML = "DOM";
//this is created: <div>DOM</div>
document.body.appendChild(element);

//updating DOM node
var li = document.createElement("li");
li.innerHTML = "ReactJs";
document.getElementById("list").appendChild(li);

// delete
var e = document.querySelector("li:last-child");
e.remove();

//add styles
document.body.style.backgroundColor = "pink";

document.querySelector(".item").style.color = "red";
