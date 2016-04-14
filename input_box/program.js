// Create an input box that, on enter ('keydown' event with keyCode === 13), adds the input text to a ol list. Ingredients:
// document.querySelector
// element.addEventListener
// element.appendChild

// var h1 = document.querySelector("h1");
//
// h1.addEventListener("mouseover", function (event) {
//   h1.innerHTML = "Watch out for Ghosts!";
// });

var inputBox = document.querySelector("input");
var ol = document.querySelector("ol");

inputBox.addEventListener("keydown", function (event){
  if (event.keyCode === 13){
  var li = document.createElement("li");
  li.innerHTML = event.target.value;
  ol.appendChild(li);
  event.target.value = "";

  }
});

// event.target.value

// input element has a property = value that captures the input as a string
// event has a property target that points at the element to which its attached

// appendChild() takes argument = element which is what is appending
