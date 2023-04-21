import { btnOne } from "./day-1.js";
import { btnTwo } from "./day-2.js";
import { btnThree } from "./day-3.js";
import { btnFour } from "./day-4.js";
let btn1 = document.querySelector("#bt-1");
let btn2 = document.querySelector("#bt-2");
let btn3 = document.querySelector("#bt-3");
let btn4 = document.querySelector("#bt-4");
let container = document.querySelector("#container");
let hello = document.querySelector(".hello-world");

btn1.addEventListener("click", () => {
  hello.style.display = "none";
  btnOne();
  let day1Que1 = document.getElementById("day1Que1");
  let day1Que2 = document.getElementById("day1Que2");
  let day1Que3 = document.getElementById("day1Que3");
  let day1Que4 = document.getElementById("day1Que4");
  let day1Que5 = document.getElementById("day1Que5");
  let day1Que6 = document.getElementById("day1Que6");
  let day1Que7 = document.getElementById("day1Que7");
  let day1Que8 = document.getElementById("day1Que8");
  let day1Que9 = document.getElementById("day1Que9");
  let day1Que10 = document.getElementById("day1Que10");
  let day1Que11 = document.getElementById("day1Que11");
  let day1Que12 = document.getElementById("day1Que12");

  day1Que1.addEventListener("click", () => {
    // alert("Read Carefully");
    day1Que1.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `JavaScript provides different value-comparison operations: "==", "===", etc. <br/>i) === : strict equality (triple equals) <br /> ii) == : loose equality (double equals)`;
  });
  day1Que2.addEventListener("click", () => {
    day1Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `Click me for Ans`;
    day1Que2.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.`;
  });
  day1Que3.addEventListener("click", () => {
    day1Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `Click me for Ans`;
  });
  day1Que4.addEventListener("click", () => {
    day1Que2.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
  });
  day1Que5.addEventListener("click", () => {
    day1Que1.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
  });
  day1Que6.addEventListener("click", () => {
    day1Que1.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
  });
  day1Que7.addEventListener("click", () => {
    day1Que1.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
  });
  day1Que8.addEventListener("click", () => {
    day1Que1.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
  });
  day1Que9.addEventListener("click", () => {
    day1Que1.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
  });
  day1Que10.addEventListener("click", () => {
    day1Que1.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
  });
  day1Que11.addEventListener("click", () => {
    day1Que1.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
  });
  day1Que12.addEventListener("click", () => {
    day1Que1.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
  });
});

btn2.addEventListener("click", () => {
  hello.style.display = "none";

  btnTwo();
});
btn3.addEventListener("click", () => {
  hello.style.display = "none";
  btnThree();
});
btn4.addEventListener("click", () => {
  hello.style.display = "none";
  btnFour();
});
