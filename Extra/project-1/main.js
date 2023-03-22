const heading = document.getElementById("heading");
const boxes = document.getElementsByClassName("box");

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
btn1.addEventListener("click", function () {
  heading.innerHTML = "Getting Started with DOM !";
  heading.style.color = "red";
});
btn2.addEventListener("click", function () {
  heading.innerHTML = "Hello World!";
  heading.style.color = "#fff";
});
btn3.addEventListener("click", function () {
  for (let index = 0; index < boxes.length; index++) {
    if (index === 0) {
      boxes[index].style.backgroundColor = "yellow";
      boxes[index].style.color = "black";
    } else if (index === 1) {
      boxes[index].style.backgroundColor = "blue";
    } else if (index === 2) {
      boxes[index].style.backgroundColor = "black";
    } else {
      boxes[index].style.backgroundColor = "green";
    }
  }
});
btn4.addEventListener("click", function () {
  for (let index = 0; index < boxes.length; index++) {
    boxes[index].style.backgroundColor = "red";
    boxes[index].style.color = "#fff";
  }
});
