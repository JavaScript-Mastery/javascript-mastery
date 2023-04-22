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
    day1Que1.innerHTML = `In JavaScript, the "==" operator is used to compare the values of two operands, whereas the "===" operator is used to compare both the values and the data types of the operands. <br /><br />Here's an example to illustrate the difference: <br /><pre>let a = 5;
let b = "5";

console.log(a == b); // true
console.log(a === b); // false

</pre>`;
    day1Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `Click me for Ans`;
    day1Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que3.innerHTML = `Click me for Ans`;
    day1Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que4.innerHTML = `Click me for Ans`;
    day1Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que5.innerHTML = `Click me for Ans`;
    day1Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que6.innerHTML = `Click me for Ans`;
    day1Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que7.innerHTML = `Click me for Ans`;
    day1Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day1Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que9.innerHTML = `Click me for Ans`;
    day1Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que10.innerHTML = `Click me for Ans`;
    day1Que11.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que11.innerHTML = `Click me for Ans`;
    day1Que12.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que12.innerHTML = `Click me for Ans`;
  });
  day1Que2.addEventListener("click", () => {
    day1Que2.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `The spread operator is a feature in JavaScript that allows an iterable (such as an array or a string) to be expanded into individual elements. The spread operator is denoted by three dots (...) and can be used in several ways in JavaScript.
<br /><br />
Here's an example of using the spread operator to concatenate two arrays: <br /> <pre>const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

</pre>`;
    day1Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `Click me for Ans`;
    day1Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que3.innerHTML = `Click me for Ans`;
    day1Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que4.innerHTML = `Click me for Ans`;
    day1Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que5.innerHTML = `Click me for Ans`;
    day1Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que6.innerHTML = `Click me for Ans`;
    day1Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que7.innerHTML = `Click me for Ans`;
    day1Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day1Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que9.innerHTML = `Click me for Ans`;
    day1Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que10.innerHTML = `Click me for Ans`;
    day1Que11.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que11.innerHTML = `Click me for Ans`;
    day1Que12.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que12.innerHTML = `Click me for Ans`;
  });
  day1Que3.addEventListener("click", () => {
    day1Que3.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que3.innerHTML = `In JavaScript, 'var', 'let', and 'const' are keywords used to declare variables. While they might seem similar, they have some important differences:
<br />
1. 'var' declarations are globally scoped or function scoped while 'let' and 'const' are block scoped. <br />
2. 'var' variables can be redeclared and updated while 'let' and 'const' variables cannot be redeclared (in the same scope) and 'const' variables cannot be updated. <br /><br />
Here's an example code that demonstrates these differences: <br /> <pre>// var example
var x = 10;
if (true) {
  var x = 20;
}
console.log(x); // outputs 20

// let example
let y = 10;
if (true) {
  let y = 20;
}
console.log(y); // outputs 10

// const example
const z = 10;
// z = 20; // throws an error
console.log(z); // outputs 10

</pre>`;
    day1Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `Click me for Ans`;
    day1Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `Click me for Ans`;
    day1Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que4.innerHTML = `Click me for Ans`;
    day1Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que5.innerHTML = `Click me for Ans`;
    day1Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que6.innerHTML = `Click me for Ans`;
    day1Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que7.innerHTML = `Click me for Ans`;
    day1Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day1Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que9.innerHTML = `Click me for Ans`;
    day1Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que10.innerHTML = `Click me for Ans`;
    day1Que11.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que11.innerHTML = `Click me for Ans`;
    day1Que12.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que12.innerHTML = `Click me for Ans`;
  });
  day1Que4.addEventListener("click", () => {
    day1Que4.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que4.innerHTML = `In JavaScript, an execution context can be defined as the environment in which a piece of code is executed. It contains information about the currently executing code, such as variable values, function calls, and the scope chain.
<br /><br />
When JavaScript code is executed, a new execution context is created. This context is responsible for managing the execution of the code within its scope, and it is destroyed once the code execution is completed.
<br /><br />
Here's a simple example of an execution context in JavaScript:<br /><pre>function myFunction() {
  var a = 10;
  console.log(a);
}

myFunction();

</pre>`;
    day1Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `Click me for Ans`;
    day1Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que3.innerHTML = `Click me for Ans`;
    day1Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `Click me for Ans`;
    day1Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que5.innerHTML = `Click me for Ans`;
    day1Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que6.innerHTML = `Click me for Ans`;
    day1Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que7.innerHTML = `Click me for Ans`;
    day1Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day1Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que9.innerHTML = `Click me for Ans`;
    day1Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que10.innerHTML = `Click me for Ans`;
    day1Que11.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que11.innerHTML = `Click me for Ans`;
    day1Que12.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que12.innerHTML = `Click me for Ans`;
  });
  day1Que5.addEventListener("click", () => {
    day1Que5.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que5.innerHTML = `In JavaScript, the creation phase and execution phase refer to two distinct stages that occur during the execution of code.
<br /> <br />
1. <b>Creation Phase:</b> <br />
The creation phase involves the creation of the variable and function declarations, which are then stored in memory. During this phase, JavaScript also sets up the scope chain and the "this" keyword.
<br /><br />Here's an example of variable and function declarations during the creation phase:<br />
<pre>function myFunction() {
  var myVariable = 1;
  console.log(myVariable);
}

</pre> <br />During the creation phase, the function and variable declarations are stored in memory. The variable "myVariable" is assigned a value of 1.
<br /><br />
2. <b>Execution Phase:</b> <br />
The execution phase refers to the moment when the code is actually executed, line by line. During this phase, JavaScript reads and executes each line of code in sequence, using the information stored in memory during the creation phase.
 <br /> <br />Here's an example of code execution during the execution phase: <br /><pre>myFunction(); // Outputs: 1

function myFunction() {
  var myVariable = 1;
  console.log(myVariable);
}

</pre> <br />In this example, the function "myFunction" is called, which triggers the execution phase. During this phase, JavaScript reads and executes the function code, which outputs the value of "myVariable" to the console.
<br /><br />
In summary, the creation phase and execution phase in JavaScript refer to the moment when the variable and function declarations are created and stored in memory, and the moment when the code is actually executed, line by line.`;
    day1Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `Click me for Ans`;
    day1Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que3.innerHTML = `Click me for Ans`;
    day1Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que4.innerHTML = `Click me for Ans`;
    day1Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `Click me for Ans`;
    day1Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que6.innerHTML = `Click me for Ans`;
    day1Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que7.innerHTML = `Click me for Ans`;
    day1Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day1Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que9.innerHTML = `Click me for Ans`;
    day1Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que10.innerHTML = `Click me for Ans`;
    day1Que11.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que11.innerHTML = `Click me for Ans`;
    day1Que12.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que12.innerHTML = `Click me for Ans`;
  });
  day1Que6.addEventListener("click", () => {
    day1Que6.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que6.innerHTML = `In JavaScript, functions are considered "first-class citizens" or "first-class functions," meaning that they are treated like any other value, such as a string or a number. This means that functions can be assigned to variables, passed as arguments to other functions, and returned as values from functions.
<br /><br />
Here's an example of a simple first-class function in JavaScript: <br />
<pre>function multiplyByTwo(num) {
  return num * 2;
}

let result = multiplyByTwo(5); // returns 10

</pre>

Now, let's see how first-class functions can be used in JavaScript to pass a function as an argument to another function: <br />
<pre>function multiplyByTwo(num) {
  return num * 2;
}

function callWith10(func) {
  return func(10);
}

let result = callWith10(multiplyByTwo); // returns 20

</pre>`;
    day1Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `Click me for Ans`;
    day1Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que3.innerHTML = `Click me for Ans`;
    day1Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que4.innerHTML = `Click me for Ans`;
    day1Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que5.innerHTML = `Click me for Ans`;
    day1Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `Click me for Ans`;
    day1Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que7.innerHTML = `Click me for Ans`;
    day1Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day1Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que9.innerHTML = `Click me for Ans`;
    day1Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que10.innerHTML = `Click me for Ans`;
    day1Que11.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que11.innerHTML = `Click me for Ans`;
    day1Que12.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que12.innerHTML = `Click me for Ans`;
  });
  day1Que7.addEventListener("click", () => {
    day1Que7.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que7.innerHTML = `A closure is a feature of JavaScript that allows a function to remember and access the variables that were present in the scope (surrounding environment) when the function was created.
<br /><br />
In simpler terms, when a function uses variables from outside of its own scope, those variables are "closed over" by the function and can still be accessed even after the function has finished executing.
<br /><br />
Here's an example to illustrate this concept:<br /><pre>function outerFunction() {
  const outerVariable = "Hello";

  function innerFunction() {
    const innerVariable = "World";
    console.log(outerVariable + " " + innerVariable);
  }

  return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Output: "Hello World"

</pre>`;
    day1Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `Click me for Ans`;
    day1Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que3.innerHTML = `Click me for Ans`;
    day1Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que4.innerHTML = `Click me for Ans`;
    day1Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que5.innerHTML = `Click me for Ans`;
    day1Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que6.innerHTML = `Click me for Ans`;
    day1Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `Click me for Ans`;
    day1Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day1Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que9.innerHTML = `Click me for Ans`;
    day1Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que10.innerHTML = `Click me for Ans`;
    day1Que11.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que11.innerHTML = `Click me for Ans`;
    day1Que12.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que12.innerHTML = `Click me for Ans`;
  });
  day1Que8.addEventListener("click", () => {
    day1Que8.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `<b>call()</b>, <b>apply()</b>, and <b>bind()</b> are all methods available in JavaScript that allow you to call a function with a specific this context and arguments.
<br /><br />
<b>call()</b> and <b>apply()</b> are similar in that they allow you to set the this context for a function, but they differ in how they handle arguments. <b>call()</b> takes an argument list, while <b>apply()</b> takes an array of arguments.
<br /><br />
<b>bind()</b> is used to create a new function with a specific this context and pre-set arguments. It does not call the function immediately but instead returns a new function that can be called later.
<br /><br />
Here are some examples to illustrate these concepts:
<br /><br />
Using <b>call():</b><br />
<pre>const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

const fullName = person.fullName.call({firstName: 'Jane', lastName: 'Doe'});
console.log(fullName); // Jane Doe

</pre>
<br />
In this example, we are calling the <i>fullName</i> function of the person object, but we are using <b>call()</b> to set the this context to a new object with a different <i>firstName</i> and <i>lastName</i>. The result is a new <i>fullName</i> string that reflects the new context.
<br /><br />
Using <b>apply():</b> <br /><pre>const numbers = [5, 10, 15, 20];

const sum = Array.prototype.reduce.apply(numbers, [(a, b) => a + b]);
console.log(sum); // 50

</pre>
<br />
In this example, we are using apply() to call the reduce() function on the numbers array, but we are passing in the reduce() function as the this context, and we are passing in an array of arguments as the second argument to apply(). This allows us to sum up all the numbers in the array using the reduce() function.
<br /><br />
Using <b>bind():</b> <br /><pre>const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

const getFullName = person.fullName.bind({firstName: 'Jane', lastName: 'Doe'});
console.log(getFullName()); // Jane Doe

</pre>

In this example, we are using bind() to create a new function called getFullName that has the this context set to a new object with a different firstName and lastName. We are not calling the fullName function directly, but instead, we are calling the new getFullName function, which returns the fullName string with the new context.
`;
    day1Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `Click me for Ans`;
    day1Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que3.innerHTML = `Click me for Ans`;
    day1Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que4.innerHTML = `Click me for Ans`;
    day1Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que5.innerHTML = `Click me for Ans`;
    day1Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que6.innerHTML = `Click me for Ans`;
    day1Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que7.innerHTML = `Click me for Ans`;
    day1Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `Click me for Ans`;
    day1Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que9.innerHTML = `Click me for Ans`;
    day1Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que10.innerHTML = `Click me for Ans`;
    day1Que11.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que11.innerHTML = `Click me for Ans`;
    day1Que12.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que12.innerHTML = `Click me for Ans`;
  });
  day1Que9.addEventListener("click", () => {
    day1Que9.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que9.innerHTML = `In JavaScript, objects are data structures that allow you to store and organize related data and functionality. They are created using the object literal notation or the Object constructor function.
<br /><br />
Here's an example of creating an object using the object literal notation: <br />
<pre>
const person = {
  name: 'Ajay',
  age: 22,
  address: {
    street: 'Gujarda',
    city: 'Mandsaur',
    state: 'MP',
    zip: '458002'
  },
  sayHello: function() {
    console.log(&#x27;Hello, my name is &#x24;{this.name}&#x27;);
  }
};

</pre>

In this example, we define an object called person that has four properties: name, age, address, and sayHello. The address property is itself an object with its own properties. The sayHello property is a method that logs a message to the console using the this keyword to refer to the person object.
<br /><br />
We can access the properties and methods of an object using dot notation or bracket notation: <br /> <pre>console.log(person.name); // "Ajay"
console.log(person.address.city); // "Mandsaur"
person.sayHello(); // "Hello, my name is Ajay."

</pre>`;
    day1Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `Click me for Ans`;
    day1Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que3.innerHTML = `Click me for Ans`;
    day1Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que4.innerHTML = `Click me for Ans`;
    day1Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que5.innerHTML = `Click me for Ans`;
    day1Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que6.innerHTML = `Click me for Ans`;
    day1Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que7.innerHTML = `Click me for Ans`;
    day1Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day1Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `Click me for Ans`;
    day1Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que10.innerHTML = `Click me for Ans`;
    day1Que11.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que11.innerHTML = `Click me for Ans`;
    day1Que12.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que12.innerHTML = `Click me for Ans`;
  });
  day1Que10.addEventListener("click", () => {
    day1Que10.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que10.innerHTML = `Function constructors in JavaScript are a way of creating objects using a constructor function. This allows you to create multiple instances of an object with similar properties and methods.
<br /><br />
Here's an example of how to create a function constructor in JavaScript: <br /> <pre>// Define the constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
}

// Create new instances of the object using the constructor function
var person1 = new Person("Alice", 25);
var person2 = new Person("Bob", 30);

// Call the greet method on each object
person1.greet(); // Output: "Hello, my name is Alice and I am 25 years old."
person2.greet(); // Output: "Hello, my name is Bob and I am 30 years old."

</pre>`;
    day1Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `Click me for Ans`;
    day1Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que3.innerHTML = `Click me for Ans`;
    day1Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que4.innerHTML = `Click me for Ans`;
    day1Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que5.innerHTML = `Click me for Ans`;
    day1Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que6.innerHTML = `Click me for Ans`;
    day1Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que7.innerHTML = `Click me for Ans`;
    day1Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day1Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que9.innerHTML = `Click me for Ans`;
    day1Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `Click me for Ans`;
    day1Que11.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que11.innerHTML = `Click me for Ans`;
    day1Que12.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que12.innerHTML = `Click me for Ans`;
  });
  day1Que11.addEventListener("click", () => {
    day1Que11.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que11.innerHTML = `Prototypes in JavaScript are a mechanism for object-oriented programming that allows objects to inherit properties and methods from other objects. Every object in JavaScript has a prototype, which is an object that acts as a template for the new objects created from it.
<br /><br />
In simpler terms, a prototype is like a blueprint or a template for creating objects in JavaScript. It defines the properties and methods that an object can inherit from it.
<br /><br />
To define a prototype in JavaScript, you can use the constructor function. Here's an example: <br />
<pre>function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
}

var person1 = new Person("John", 30);
person1.greet(); // Output: Hello, my name is John and I'm 30 years old.

</pre>`;
    day1Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `Click me for Ans`;
    day1Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que3.innerHTML = `Click me for Ans`;
    day1Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que4.innerHTML = `Click me for Ans`;
    day1Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que5.innerHTML = `Click me for Ans`;
    day1Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que6.innerHTML = `Click me for Ans`;
    day1Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que7.innerHTML = `Click me for Ans`;
    day1Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day1Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que9.innerHTML = `Click me for Ans`;
    day1Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que10.innerHTML = `Click me for Ans`;
    day1Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `Click me for Ans`;
    day1Que12.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que12.innerHTML = `Click me for Ans`;
  });
  day1Que12.addEventListener("click", () => {
    day1Que12.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que12.innerHTML = `In JavaScript, every object has a property called __proto__, which refers to its prototype object. The prototype object, in turn, may also have a __proto__ property that refers to its own prototype, creating a chain of objects linked together in a prototype chain.
<br /> <br />
When you access a property of an object, JavaScript looks for the property in the object itself. If the property is not found, it looks in the object's prototype, then in the prototype's prototype, and so on until it either finds the property or reaches the end of the prototype chain.
<br /><br />
Here is an example code that demonstrates the prototype chain in JavaScript: <br />
<pre>// Define a constructor function
function Animal(name) {
  this.name = name;
}

// Add a method to the Animal prototype
Animal.prototype.walk = function() {
  console.log(this.name + ' is walking.');
};

// Create a new instance of Animal
var cat = new Animal('Whiskers');

// Call the walk method on the cat instance
cat.walk(); // Output: Whiskers is walking.

// The walk method is not defined on the cat instance itself,
// but it is found in the Animal prototype via the prototype chain.

</pre>`;
    day1Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que1.innerHTML = `Click me for Ans`;
    day1Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que3.innerHTML = `Click me for Ans`;
    day1Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que4.innerHTML = `Click me for Ans`;
    day1Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que5.innerHTML = `Click me for Ans`;
    day1Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que6.innerHTML = `Click me for Ans`;
    day1Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que7.innerHTML = `Click me for Ans`;
    day1Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day1Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que9.innerHTML = `Click me for Ans`;
    day1Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que10.innerHTML = `Click me for Ans`;
    day1Que11.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que11.innerHTML = `Click me for Ans`;
    day1Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que2.innerHTML = `Click me for Ans`;
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
