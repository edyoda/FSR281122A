// to add elements
// append, prepend, after, before

$(document).ready(function () {
  $("#primary").click(function () {
    $("#list").append("<li>JS</li>");
  });
});

$(document).ready(function () {
  $("#primary").click(function () {
    $("#list").prepend("<li>React</li>");
  });
});

$(document).ready(function () {
  $("#primary").click(function () {
    $("#first").after("<li>React</li>");
  });
});

// to remove elements
// remove, empty

$(document).ready(function () {
  $("#remove").click(function () {
    $("#list").remove();
  });
});

$(document).ready(function () {
  $("#remove").click(function () {
    $("#list").empty();
  });
});

//Traversing ancestors: parent(), parents(), parentsUntil()

//Traversing descendants: children(), find()

//Traversing siblings: sibling(), next(), prev()

