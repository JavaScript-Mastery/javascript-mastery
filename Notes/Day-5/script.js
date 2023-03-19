const heading = document.getElementById("my-heading");
const button = document.getElementById("my-button");
const head = document.getElementById("my-name");

button.addEventListener("click", function () {
  heading.innerHTML = "Button clicked";
  head.innerHTML = " By You ";
  heading.style.color = "red";
  head.style.color = "green";
});
var elements = document.getElementsByClassName("example");

// Loop through the elements and change their text color
for (var i = 0; i < elements.length; i++) {
  if (i % 2 == 0) {
    elements[i].style.color = "red";
  } else {
    elements[i].style.color = "blue";
  }
}
var element = document.getElementsByTagName("div");
for (var i = 0; i < elements.length; i++) {
  if (i % 2 == 0) {
    element[i].style.background = "#11f4ff";
  } else {
    element[i].style.background = "#fff411";
  }
  element[i].style.height = "50px";
}
