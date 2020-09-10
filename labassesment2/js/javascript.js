

var btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function(e) {
  e.preventDefault();
  validate(e);
  
});

function validate(e) {
  var numbers = /[^0-9]/;
  //you are getting values by using id give input id attribute as well
  var isbn = document.getElementById("isbn").value;
  var copies = document.getElementById("copies").value;

  if (isbn.length != 13) {
    alert("Please enter a valid ISBN Number");
  } else if (isbn.match(numbers)) {
    alert("It is a valid ISBN Number");
  } 
  if (copies == "") {
    alert("Please fill in the number of copies");
  }  
  else if (copies.match(numbers)) {
    alert("Please enter a valid number of copies");
  }
  
}