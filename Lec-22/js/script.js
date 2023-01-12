//add (create)

var list = document.querySelector("#movie-list ul");

var addForm = document.forms["add-movie"];

addForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var value = addForm.querySelector("input[type=text]").value;
  var li = document.createElement("li");
  var movieName = document.createElement("span");
  var deleteBtn = document.createElement("span");
  var addForm = document.forms["add-movie"];

  li.appendChild(movieName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  var img = document.createElement("img");
  img.setAttribute("src", "");
  document.body.appendChild(img);

  var d = new Date();
  console.log(d.getDate());
  console.log(d.getDay());

  movieName.textContent = value;
  deleteBtn.textContent = "delete";
  movieName.classList.add("name");
  deleteBtn.classList.add("delete");
});

//hide the list
var hideForm = document.querySelector("#add-movie #hide");

hideForm.addEventListener("click", function () {
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});

//delete
list.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.className == "delete") {
    // e.target.parentElement.remove();

    //alternate
    var li = e.target.parentElement;
    list.removeChild(li);
  }
});

//search
var searchForm = document.querySelector("#search-movies input");

searchForm.addEventListener("keyup", function (e) {
  var searchItem = list.querySelectorAll("li");
  for (var i = 0; i < searchItem.length; i++) {
    if (
      searchItem[i].textContent
        .toUpperCase()
        .indexOf(e.target.value.toUpperCase()) > -1
    ) {
      searchItem[i].style.display = "block";
    } else {
      searchItem[i].style.display = "none";
    }
  }
});

// str.indexOf('end')

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
