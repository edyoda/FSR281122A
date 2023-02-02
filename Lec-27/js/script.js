// API: Applicatipn Program Interface (url)

// http method: get (200), post (201), update(post/id), delete

// http status code/response

// Free GET API
// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts/
// https://rapidapi.com/hub

// https://data/employee/{apikey}/1
// var apiKey = 'yhdhhnikjefjol90eifjfkj'

//Google Api's

// for POST reuqest free api
// https://reqres.in/api/users
// https://rapidapi.com/hub

// website for testing search pattern
// https://regex101.com/

// jQuery
//get request
$(document).ready(function () {
  var apiData;

  $("#getdata").click(function () {
    $.get(
      "https://jsonplaceholder.typicode.com/users",
      function (data, status) {
        //callback parameters -> data, status
        if (data.length) {
          apiData = data;
          console.log(data, status);
        } else {
          console.log("api failed");
        }
      }
    );
  });
});

//post request
$(document).ready(function () {
  var postApi = "https://reqres.in/api/users";

  $("#postdata").click(function () {
    $.post(
      postApi,
      {
        name: "alina",
        job: "leader",
      },
      function (data, status) {
        console.log(data, status);
      }
    );
  });
});

//common
$(document).ready(function () {
  $("#common").click(function () {
    jQuery.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      type: "GET",
      success: function (data) {
        console.log(data);
      },
    });
  });
});

//
function onSubmit() {
  var email = document.getElementById("email").value;
  var contact = document.getElementById("contact").value;

  validateEmail(email);
  validateContact(contact);
}

function validateEmail(email) {
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!pattern.test(email)) {
    document.getElementById("name-error").innerHTML = "Plese enter valid email";
  } else {
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("email").value = "";
  }
}

function validateContact(contact) {
  var digitPattern = /^[0-9]*$/;
  if (contact.trim().length == "") {
    document.getElementById("contact-error").innerHTML = "This is required";
  } else if (contact.length != 10) {
    document.getElementById("contact-error").innerHTML =
      "Contact should be of 10 digits";
  } else if (!digitPattern.test(contact)) {
    document.getElementById("contact-error").innerHTML = "Please enter digits";
  } else {
    document.getElementById("contact-error").innerHTML = "";
    document.getElementById("contact").value = "";
  }
}
