// Create an h1 heading that, on mouseover, changes to some different text.
// document.querySelector
// element.addEventListener
// element.innerHTML


var h1 = document.querySelector("h1");

h1.addEventListener("mouseover", function (event) {
  h1.innerHTML = "Watch out for Ghosts!";
});
