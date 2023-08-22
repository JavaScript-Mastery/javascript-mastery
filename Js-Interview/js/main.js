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
  btn1.style.backgroundColor="#fcdc00";
  btn1.style.color="#000";
  btn4.style.backgroundColor="forestgreen";
  btn4.style.color="#fff";
  btn3.style.backgroundColor="forestgreen";
  btn3.style.color="#fff";
  btn2.style.backgroundColor="forestgreen";
  btn2.style.color="#fff";
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
    day1Que6.innerHTML = `In JavaScript, first class function means that functions can be assigned to variables, passed as arguments to other functions, and returned from functions like any other data type.
    <br /><br />
    Here's an example of using a first-class function in JavaScript: <br />
<pre>// defining a function as a variable
const add = function(x, y) {
  return x + y;
}

// passing a function as an argument to another function
function calculate(operation, x, y) {
  return operation(x, y);
}

const result = calculate(add, 2, 3);

console.log(result);  // result will be 5

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
    day1Que7.innerHTML = `Closures are used in JavaScript to create private variables and methods, which are not accessible from outside the closure.
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
<b style="color: #f1f100; font-family: cursive;">call():</b>is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.<br />
<pre>const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
};

const person2 = {
  firstName: "Ajay",
  lastName: "Dhangar"
};


person.fullName.call(person2); // Output: Jane Doe

</pre>
<br />
In this example, we are calling the <i>fullName</i> function of the person object, but we are using <b>call()</b> to set the this context to a new object with a different <i>firstName</i> and <i>lastName</i>. The result is a new <i>fullName</i> string that reflects the new context.
<br /><br />
<b style="color: #f1f100; font-family: cursive;">apply():</b> is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.<br /><pre>const numbers = [5, 10, 15, 20];

const sum = Array.prototype.reduce.apply(numbers, [(a, b) => a + b]);
console.log(sum); // 50

</pre>
<br />
In this example, we are using apply() to call the reduce() function on the numbers array, but we are passing in the reduce() function as the this context, and we are passing in an array of arguments as the second argument to apply(). This allows us to sum up all the numbers in the array using the reduce() function.
<br /><br />
<b style="color: #f1f100; font-family: cursive;">bind():</b> is a function that helps you create another function that you can execute later with the new context of this that is provided. <br /><pre>const person = {
  firstName: 'Ajay',
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

var person1 = new Person("Ajay", 30);
person1.greet(); // Output: Hello, my name is Ajay and I'm 30 years old.

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
    day1Que12.innerHTML = `In JavaScript, every object has a property called prototype which refers to another object. This creates a chain of objects, where each object's prototype is another object. This is called the prototype chain.<br /> <br />
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
  btn2.style.backgroundColor="#fcdc00";
  btn2.style.color="#000";
  btn4.style.backgroundColor="forestgreen";
  btn4.style.color="#fff";
  btn1.style.backgroundColor="forestgreen";
  btn1.style.color="#fff";
  btn3.style.backgroundColor="forestgreen";
  btn3.style.color="#fff";
  btnTwo();

  let day2Que1 = document.getElementById("day2Que1");
  let day2Que2 = document.getElementById("day2Que2");
  let day2Que3 = document.getElementById("day2Que3");
  let day2Que4 = document.getElementById("day2Que4");
  let day2Que5 = document.getElementById("day2Que5");
  let day2Que6 = document.getElementById("day2Que6");
  let day2Que7 = document.getElementById("day2Que7");
  let day2Que8 = document.getElementById("day2Que8");
  let day2Que9 = document.getElementById("day2Que9");
  let day2Que10 = document.getElementById("day2Que10");

  day2Que1.addEventListener("click", () => {
    // alert("Read Carefully");
    day2Que1.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que1.innerHTML = `
    Inheritance in JavaScript refers to the concept of creating new objects based on an existing object. The new object, also known as the child object, inherits properties and methods from the existing object, known as the parent object.
<br /><br />
One way to implement inheritance in JavaScript is by using function constructors. A function constructor is a function that is used to create new objects. To create a child object that inherits from a parent object using function constructors, we can use the Object.create() method.
<br /><br />
Here's an example: <br /><pre>
// Parent function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Child function constructor
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit from parent prototype
Employee.prototype = Object.create(Person.prototype);

// Child method
Employee.prototype.introduce = function() {
  console.log("Hi, my name is " + this.name + ", and I work as a " + this.jobTitle + ".");
};

// Create a new Employee object
var employee1 = new Employee("Ajay", 22, "Software Engineer");

// Call parent and child methods
console.log(employee1.name); // output: "Ajay"
console.log(employee1.age); // output: 22
employee1.introduce(); // output: "Hi, my name is Ajay, and I work as a Software Engineer."

</pre>`;
    day2Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que2.innerHTML = `Click me for Ans`;
    day2Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que3.innerHTML = `Click me for Ans`;
    day2Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que4.innerHTML = `Click me for Ans`;
    day2Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que5.innerHTML = `Click me for Ans`;
    day2Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que6.innerHTML = `Click me for Ans`;
    day2Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que7.innerHTML = `Click me for Ans`;
    day2Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que8.innerHTML = `Click me for Ans`;
    day2Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que9.innerHTML = `Click me for Ans`;
    day2Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que10.innerHTML = `Click me for Ans`;
  });
  day2Que2.addEventListener("click", () => {
    day2Que2.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que2.innerHTML = `In JavaScript, a callback is a function that is passed as an argument to another function and is executed after some event or task is completed.
    <br /> <pre>
function getUserData(userId, callback) {
  // Make a request to get user data
  // Once the data is received, call the callback function with the data
  const userData = { name: "Ajay", age: 30, email: "Ajay@example.com" };
  callback(userData);
}

// Define a callback function to process the user data
function processUserData(userData) {
  console.log("Name:", userData.name);
  console.log("Age:", userData.age);
  console.log("Email:", userData.email);
}

// Call the getUserData function with the user ID and the callback function
getUserData(123, processUserData);

</pre>`;
    day2Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que1.innerHTML = `Click me for Ans`;
    day2Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que3.innerHTML = `Click me for Ans`;
    day2Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que4.innerHTML = `Click me for Ans`;
    day2Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que5.innerHTML = `Click me for Ans`;
    day2Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que6.innerHTML = `Click me for Ans`;
    day2Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que7.innerHTML = `Click me for Ans`;
    day2Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que8.innerHTML = `Click me for Ans`;
    day2Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que9.innerHTML = `Click me for Ans`;
    day2Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que10.innerHTML = `Click me for Ans`;
  });
  day2Que3.addEventListener("click", () => {
    day2Que3.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que3.innerHTML = `<b style="color: #f1f100; font-family: cursive;">setTimeout()</b> is a JavaScript function that allows you to schedule a function to be executed after a certain amount of time has passed. The function takes two parameters: the first is the function you want to execute, and the second is the time delay in milliseconds.
<br /><br />
Here's an example code that uses <b style="color: #f1f100; font-family: cursive;">setTimeout():</b> <br />
<pre>
function greeting() {
  console.log("Hello, world!");
}

setTimeout(greeting, 2000);
greeting()

</pre>
<p align="center"><b>OR</b></p> <br /><pre>console.log("Before setTimeout");

setTimeout(function() {
  console.log("Hello, world!");
}, 1000);

console.log("After setTimeout");

</pre>`;
    day2Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que1.innerHTML = `Click me for Ans`;
    day2Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que2.innerHTML = `Click me for Ans`;
    day2Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que4.innerHTML = `Click me for Ans`;
    day2Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que5.innerHTML = `Click me for Ans`;
    day2Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que6.innerHTML = `Click me for Ans`;
    day2Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que7.innerHTML = `Click me for Ans`;
    day2Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que8.innerHTML = `Click me for Ans`;
    day2Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que9.innerHTML = `Click me for Ans`;
    day2Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que10.innerHTML = `Click me for Ans`;
  });
  day2Que4.addEventListener("click", () => {
    day2Que4.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que4.innerHTML = `In JavaScript, the <b style="color: #f1f100; font-family: cursive;">event loop</b> and <b style="color: #f1f100; font-family: cursive;">call stack</b> are two key concepts that determine how code is executed in the language.
<br /><br />
The <b style="color: #f1f100; font-family: cursive;">call stack</b> is a data structure that keeps track of the function calls in a program. Whenever a function is called, it is added to the top of the <b style="color: #f1f100; font-family: cursive;">call stack</b>, and when the function completes, it is removed from the top of the stack. This allows JavaScript to keep track of where it is in a program's execution and which function to return to after the current one finishes.
<br /><br />
Here's an example of a <b style="color: #f1f100; font-family: cursive;">call stack</b> in action: <br /> <pre>function greet(name) {
  console.log("Hello, " + name + "!");
}

function sayHello() {
  const name = "Ajay";
  greet(name);
}

sayHello(); // "Hello, Ajay!"

</pre>

The <b style="color: #f1f100; font-family: cursive;">event loop</b> is a mechanism that allows JavaScript to handle asynchronous code, such as waiting for user input or network requests. The <b style="color: #f1f100; font-family: cursive;">event loop</b> constantly checks for any events that need to be processed, and when it finds one, it adds it to a queue.
<br /><br />
Here's an example of the <b style="color: #f1f100; font-family: cursive;">event loop</b> in action: <br /><pre>console.log("Start");

setTimeout(function() {
  console.log("First timeout");
}, 1000);

setTimeout(function() {
  console.log("Second timeout");
}, 500);

console.log("End");

</pre>`;
    day2Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que1.innerHTML = `Click me for Ans`;
    day2Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que3.innerHTML = `Click me for Ans`;
    day2Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que2.innerHTML = `Click me for Ans`;
    day2Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que5.innerHTML = `Click me for Ans`;
    day2Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que6.innerHTML = `Click me for Ans`;
    day2Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que7.innerHTML = `Click me for Ans`;
    day2Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day2Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que9.innerHTML = `Click me for Ans`;
    day2Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que10.innerHTML = `Click me for Ans`;
  });
  day2Que5.addEventListener("click", () => {
    day2Que5.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que5.innerHTML = `<b style="color: #f1f100; font-family: cursive;">Promises</b> are a way to handle asynchronous operations in JavaScript. In simpler terms, they allow you to handle code that may take some time to execute without blocking the rest of your code.
<br /><br />
A <b style="color: #f1f100; font-family: cursive;">Promise</b> represents a value that may not be available yet, but will be at some point in the future. It is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
<br /><br />
To create a Promise, you can use the <b style="color: #f1f100; font-family: cursive;">Promise</b> constructor. It takes a single argument, which is a function called the "executor". This function takes two parameters, <b style="color: #f1f100; font-family: cursive;">resolve</b> and <b style="color: #f1f100; font-family: cursive;">reject</b>, which are functions that are called when the Promise is resolved or rejected, respectively.
<br /><br />
Here's an example of creating and using a Promise in JavaScript: <br /><pre>const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = 42;
    resolve(result);
  }, 1000);
});

myPromise.then((result) => {
  console.log(&#x27;The answer is &#x24;{result}&#x27;);
}).catch((error) => {
  console.error(&#x27;There was an error: &#x24;{error}&#x27;);
});

</pre>
<p align="center">OR</p> <pre>const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ['apple', 'banana', 'orange'];
      if (data) {
        resolve(data);
      } else {
        reject('Error: Data not found');
      }
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

  </pre>`;
    day2Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que1.innerHTML = `Click me for Ans`;
    day2Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que3.innerHTML = `Click me for Ans`;
    day2Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que4.innerHTML = `Click me for Ans`;
    day2Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que2.innerHTML = `Click me for Ans`;
    day2Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que6.innerHTML = `Click me for Ans`;
    day2Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que7.innerHTML = `Click me for Ans`;
    day2Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que8.innerHTML = `Click me for Ans`;
    day2Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que9.innerHTML = `Click me for Ans`;
    day2Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que10.innerHTML = `Click me for Ans`;
  });
  day2Que6.addEventListener("click", () => {
    day2Que6.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que6.innerHTML = `<b style="color: #f1f100; font-family: cursive;">Async/await</b> is a feature in JavaScript that allows asynchronous code to be written in a synchronous style. This makes it easier to write and read code that deals with promises, which are a way to handle asynchronous operations in JavaScript.
    <br /><br />
    The async keyword is used to define a function that returns a promise, while the await keyword is used to wait for a promise to resolve. <br /> Here's an example:
<pre>async function getData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

console.log(getData());

</pre>
Now, let's see what happens when we don't use async and await:
<br />
<pre>function getData() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

</pre>`;
    day2Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que1.innerHTML = `Click me for Ans`;
    day2Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que3.innerHTML = `Click me for Ans`;
    day2Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que4.innerHTML = `Click me for Ans`;
    day2Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que5.innerHTML = `Click me for Ans`;
    day2Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que2.innerHTML = `Click me for Ans`;
    day2Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que7.innerHTML = `Click me for Ans`;
    day2Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que8.innerHTML = `Click me for Ans`;
    day2Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que9.innerHTML = `Click me for Ans`;
    day2Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que10.innerHTML = `Click me for Ans`;
  });
  day2Que7.addEventListener("click", () => {
    day2Que7.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que7.innerHTML = `<b style="color: #f1f100; font-family: cursive;">Hoisting</b> is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the code is actually executed. This means that even if a variable or function is declared after it is used, it can still be accessed.
<br /><br />
For example, consider the following code snippet: <br /><pre>
x = 5;
console.log(x);
var x;

</pre>
In this code, <b style="color: #f1f100; font-family: cursive;">x</b> is assigned the value of <b style="color: #f1f100; font-family: cursive;">5</b> before it is declared. However, because of hoisting, the variable declaration is moved to the top of the scope, so the code is interpreted as:
<pre>var x;
x = 5;

console.log(x);

</pre>
As a result, the output of this code will be <b style="color: #f1f100; font-family: cursive;">5</b>, even though the assignment comes before the declaration.
<br /><br />
Similarly, hoisting also applies to function declarations. For example: <br /><pre>myFunction();

function myFunction() {
  console.log("Hello!");
}

</pre>
In this code, <b style="color: #f1f100; font-family: cursive;">myFunction()</b> is called before it is declared. However, because of hoisting, the function declaration is moved to the top of the scope, so the code is interpreted as:
<pre>function myFunction() {
  console.log("Hello!");
}

myFunction();

</pre>
As a result, the output of this code will be <b style="color: #f1f100; font-family: cursive;">Hello!</b>
`;
    day2Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que1.innerHTML = `Click me for Ans`;
    day2Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que3.innerHTML = `Click me for Ans`;
    day2Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que4.innerHTML = `Click me for Ans`;
    day2Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que5.innerHTML = `Click me for Ans`;
    day2Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que6.innerHTML = `Click me for Ans`;
    day2Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que2.innerHTML = `Click me for Ans`;
    day2Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que8.innerHTML = `Click me for Ans`;
    day2Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que9.innerHTML = `Click me for Ans`;
    day2Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que10.innerHTML = `Click me for Ans`;
  });
  day2Que8.addEventListener("click", () => {
    day2Que8.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que8.innerHTML = `The DOM stands for Document Object Model, and it's a way for web developers to interact with and manipulate HTML and XML documents using JavaScript.
<br /><br />
Here's a simple example code snippet that demonstrates how you can use JavaScript to access and modify the DOM: <br /><pre>
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
	&lt;title>My Webpage&lt;/title>
&lt;/head>
&lt;body>
	&lt;h1>Welcome to my webpage!&lt;/h1>
	&lt;p>Here's some text for you to read.&lt;/p>

	&lt;script>
		// Select the first &lt;p> element on the page
		var pElement = document.querySelector('p');

		// Change the text inside the &lt;p> element
		pElement.textContent = 'This is new text!';

		// Create a new &lt;button> element
		var buttonElement = document.createElement('button');

		// Add some text to the button
		buttonElement.textContent = 'Click me!';

		// Append the button to the end of the &lt;body> element
		document.body.appendChild(buttonElement);
	&lt;/script>
&lt;/body>
&lt;/html>
</pre>`;
    day2Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que1.innerHTML = `Click me for Ans`;
    day2Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que3.innerHTML = `Click me for Ans`;
    day2Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que4.innerHTML = `Click me for Ans`;
    day2Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que5.innerHTML = `Click me for Ans`;
    day2Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que6.innerHTML = `Click me for Ans`;
    day2Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que7.innerHTML = `Click me for Ans`;
    day2Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que2.innerHTML = `Click me for Ans`;
    day2Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que9.innerHTML = `Click me for Ans`;
    day2Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que10.innerHTML = `Click me for Ans`;
  });
  day2Que9.addEventListener("click", () => {
    day2Que9.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que9.innerHTML = `<b style="color: #f1f100; font-family: cursive;">Undefined: </b><br />
Undefined is a primitive value in JavaScript that is automatically assigned to a variable that has been declared but not initialized. It indicates the absence of a value.
<br /><br />Example:<pre>let x;
console.log(x); // Output: undefined

</pre>
<b style="color: #f1f100; font-family: cursive;">Not Defined:</b> <br />
A variable that has not been declared or initialized in a program is said to be not defined. Attempting to access such a variable will result in a ReferenceError.
<br /><br /> Example:
<pre>console.log(y); // Output: ReferenceError: y is not defined

</pre>

<b style="color: #f1f100; font-family: cursive;">NaN:</b><br />
NaN stands for "Not a Number". It is a special value in JavaScript that is returned when a mathematical operation fails to produce a meaningful result.
<br /><br /> Example: <pre>let x = "Hello";
let y = parseInt(x);
console.log(y); // Output: NaN

</pre>
`;

    day2Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que1.innerHTML = `Click me for Ans`;
    day2Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que3.innerHTML = `Click me for Ans`;
    day2Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que4.innerHTML = `Click me for Ans`;
    day2Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que5.innerHTML = `Click me for Ans`;
    day2Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que6.innerHTML = `Click me for Ans`;
    day2Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que7.innerHTML = `Click me for Ans`;
    day2Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que8.innerHTML = `Click me for Ans`;
    day2Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que2.innerHTML = `Click me for Ans`;
    day2Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que10.innerHTML = `Click me for Ans`;
  });
  day2Que10.addEventListener("click", () => {
    day2Que10.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que10.innerHTML = `The <b style="color: #f1f100; font-family: cursive;">nullish</b> operator (<b style="color: #f1f100; font-family: cursive;">??</b>) is a new operator introduced in <b style="color: #f1f100; font-family: cursive;">ECMAScript 2020</b> that allows you to check if a value is <b style="color: #f1f100; font-family: cursive;">null</b> or <b style="color: #f1f100; font-family: cursive;">undefined</b>. It's similar to the logical OR (||) operator, but with one key difference: the nullish operator only returns the right-hand side operand if the left-hand side operand is null or undefined.
<br /><br />
Here's an example:<pre>const myVariable = null;
const myValue = myVariable ?? 'defaultValue';

console.log(myValue); // Output: defaultValue
</pre>

In this example, the value of <b style="color: #f1f100; font-family: cursive;">myVariable</b> is null, so the nullish operator returns the default value <b style="color: #f1f100; font-family: cursive;">'defaultValue'</b>.
<br /><br />
Now let's see what happens when the left-hand side operand is not null or undefined: <pre>const myVariable = 0;
const myValue = myVariable ?? 'defaultValue';

console.log(myValue); // Output: 0

</pre>
`;
    day2Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que1.innerHTML = `Click me for Ans`;
    day2Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que3.innerHTML = `Click me for Ans`;
    day2Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que4.innerHTML = `Click me for Ans`;
    day2Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que5.innerHTML = `Click me for Ans`;
    day2Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que6.innerHTML = `Click me for Ans`;
    day2Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que7.innerHTML = `Click me for Ans`;
    day2Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que8.innerHTML = `Click me for Ans`;
    day2Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que9.innerHTML = `Click me for Ans`;
    day2Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day2Que2.innerHTML = `Click me for Ans`;
  });
});
btn3.addEventListener("click", () => {
  hello.style.display = "none";
  btn3.style.backgroundColor="#fcdc00";
  btn3.style.color="#000";
  btn1.style.backgroundColor="forestgreen";
  btn1.style.color="#fff";
  btn2.style.backgroundColor="forestgreen";
  btn2.style.color="#fff";
  btn4.style.backgroundColor="forestgreen";
  btn4.style.color="#fff";
  btnThree();

  let day3Que1 = document.getElementById("day3Que1");
  let day3Que2 = document.getElementById("day3Que2");
  let day3Que3 = document.getElementById("day3Que3");
  let day3Que4 = document.getElementById("day3Que4");
  let day3Que5 = document.getElementById("day3Que5");
  let day3Que6 = document.getElementById("day3Que6");
  let day3Que7 = document.getElementById("day3Que7");
  let day3Que8 = document.getElementById("day3Que8");
  let day3Que9 = document.getElementById("day3Que9");
  let day3Que10 = document.getElementById("day3Que10");

  day3Que1.addEventListener("click", () => {
    // alert("Read Carefully");
    day3Que1.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que1.innerHTML = `<pre>// Arithmetic operators
let a = 5;
let b = 10;
let c = a + b; // addition
let d = b - a; // subtraction
let e = a * b; // multiplication
let f = b / a; // division
let g = b % a; // modulus (remainder)

// Assignment operators
let x = 5;
x += 10; // equivalent to x = x + 10
x -= 5; // equivalent to x = x - 5
x *= 2; // equivalent to x = x * 2
x /= 3; // equivalent to x = x / 3
x %= 2; // equivalent to x = x % 2

// Comparison operators
let num1 = 10;
let num2 = 20;
let num3 = 10;
let isEqual = num1 == num2; // false
let isNotEqual = num1 != num2; // true
let isStrictEqual = num1 === num3; // true (checks both value and data type)
let isGreaterThan = num2 > num1; // true
let isLessThanOrEqual = num1 <= num3; // true

// Logical operators
let isTrue = true;
let isFalse = false;
let isAnd = isTrue && isFalse; // false
let isOr = isTrue || isFalse; // true
let isNot = !isTrue; // false

// Bitwise operators
let num4 = 5; // binary: 0101
let num5 = 10; // binary: 1010
let bitAnd = num4 & num5; // 0000 (AND)
let bitOr = num4 | num5; // 1111 (OR)
let bitXor = num4 ^ num5; // 1111 (XOR)
let bitNot = ~num4; // 1010 (NOT)
let bitLeftShift = num4 << 1; // 1010 (left shift)
let bitRightShift = num5 >> 1; // 0101 (right shift)

</pre>`;
    day3Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que2.innerHTML = `Click me for Ans`;
    day3Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que3.innerHTML = `Click me for Ans`;
    day3Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que4.innerHTML = `Click me for Ans`;
    day3Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que5.innerHTML = `Click me for Ans`;
    day3Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que6.innerHTML = `Click me for Ans`;
    day3Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que7.innerHTML = `Click me for Ans`;
    day3Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que8.innerHTML = `Click me for Ans`;
    day3Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que9.innerHTML = `Click me for Ans`;
    day3Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que10.innerHTML = `Click me for Ans`;
  });
  day3Que2.addEventListener("click", () => {
    day3Que2.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que2.innerHTML = `Pure functions are functions that always return the same output for a given input and do not have any side effects, meaning they do not modify any variables or states outside of the function.
<br /><br />
Here's an example of a pure function in JavaScript: <br /><pre>function add(a, b) {
  return a + b;
}

</pre>`;
    day3Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que1.innerHTML = `Click me for Ans`;
    day3Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que3.innerHTML = `Click me for Ans`;
    day3Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que4.innerHTML = `Click me for Ans`;
    day3Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que5.innerHTML = `Click me for Ans`;
    day3Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que6.innerHTML = `Click me for Ans`;
    day3Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que7.innerHTML = `Click me for Ans`;
    day3Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que8.innerHTML = `Click me for Ans`;
    day3Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que9.innerHTML = `Click me for Ans`;
    day3Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que10.innerHTML = `Click me for Ans`;
  });
  day3Que3.addEventListener("click", () => {
    day3Que3.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que3.innerHTML = `<b style="color: #f1f100; font-family: cursive;">Callback hell</b> is a common issue in JavaScript that arises when dealing with multiple asynchronous operations that depend on each other. It occurs when the code becomes nested within multiple callback functions, making it difficult to read and debug.
<br /><br />
Here's an example of callback hell: <pre>function getData(callback) {
  setTimeout(function() {
    callback('Data received!');
  }, 2000);
}

function processData(callback) {
  setTimeout(function() {
    callback('Data processed!');
  }, 2000);
}

function saveData(callback) {
  setTimeout(function() {
    callback('Data saved!');
  }, 2000);
}

getData(function(data) {
  console.log(data);
  processData(function(data) {
    console.log(data);
    saveData(function(data) {
      console.log(data);
    });
  });
});

</pre>`;
    day3Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que1.innerHTML = `Click me for Ans`;
    day3Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que2.innerHTML = `Click me for Ans`;
    day3Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que4.innerHTML = `Click me for Ans`;
    day3Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que5.innerHTML = `Click me for Ans`;
    day3Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que6.innerHTML = `Click me for Ans`;
    day3Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que7.innerHTML = `Click me for Ans`;
    day3Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que8.innerHTML = `Click me for Ans`;
    day3Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que9.innerHTML = `Click me for Ans`;
    day3Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que10.innerHTML = `Click me for Ans`;
  });
  day3Que4.addEventListener("click", () => {
    day3Que4.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que4.innerHTML = `Promise chaining is a way to use promises in JavaScript to execute a series of asynchronous operations in a specific order. It involves calling multiple promises in a sequence, where each promise depends on the result of the previous one.
<br /><br />
Here's an example of promise chaining in JavaScript: <pre>function stepOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step One completed");
    }, 1000);
  });
}

function stepTwo(previousResult) {
  console.log(previousResult);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step Two completed");
    }, 2000);
  });
}

function stepThree(previousResult) {
  console.log(previousResult);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step Three completed");
    }, 3000);
  });
}

stepOne()
  .then((result) => stepTwo(result))
  .then((result) => stepThree(result))
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  </pre>`;
    day3Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que1.innerHTML = `Click me for Ans`;
    day3Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que3.innerHTML = `Click me for Ans`;
    day3Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que2.innerHTML = `Click me for Ans`;
    day3Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que5.innerHTML = `Click me for Ans`;
    day3Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que6.innerHTML = `Click me for Ans`;
    day3Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que7.innerHTML = `Click me for Ans`;
    day3Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day1Que8.innerHTML = `Click me for Ans`;
    day3Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que9.innerHTML = `Click me for Ans`;
    day3Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que10.innerHTML = `Click me for Ans`;
  });
  day3Que5.addEventListener("click", () => {
    day3Que5.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que5.innerHTML = `<b style="color: #f1f100; font-family: cursive;">Arrow</b> functions are a shorthand way of writing JavaScript functions. They were introduced in ES6 and provide a more concise syntax for writing functions.
<br /><br />
Here's an example of a traditional function that adds two numbers: <pre>function addNumbers(a, b) {
  return a + b;
}

</pre>
And here's the same function written using arrow function syntax:
<pre>const addNumbers = (a, b) => a + b;

</pre>`;
    day3Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que1.innerHTML = `Click me for Ans`;
    day3Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que3.innerHTML = `Click me for Ans`;
    day3Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que4.innerHTML = `Click me for Ans`;
    day3Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que2.innerHTML = `Click me for Ans`;
    day3Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que6.innerHTML = `Click me for Ans`;
    day3Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que7.innerHTML = `Click me for Ans`;
    day3Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que8.innerHTML = `Click me for Ans`;
    day3Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que9.innerHTML = `Click me for Ans`;
    day3Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que10.innerHTML = `Click me for Ans`;
  });
  day3Que6.addEventListener("click", () => {
    day3Que6.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que6.innerHTML = `<b style="color: #f1f100; font-family: cursive;">Async/await</b> is a modern syntax for writing asynchronous code in JavaScript that allows you to write code that looks and behaves like synchronous code. It makes it easier to write, read, and debug asynchronous code by reducing the complexity of handling asynchronous operations.
<br /><br />
In traditional asynchronous programming, callbacks or promises are used to handle asynchronous code, which can lead to nested callbacks or complex chains of <b style="color: #f1f100; font-family: cursive;">then()</b> functions. <b style="color: #f1f100; font-family: cursive;">Async/await</b> simplifies this by allowing you to write code that waits for a promise to resolve or reject before moving on to the next line of code, similar to the way synchronous code is executed.
<br /><br />
The <b style="color: #f1f100; font-family: cursive;">async</b> keyword is used to define an asynchronous function that returns a promise, and the <b style="color: #f1f100; font-family: cursive;">await</b> keyword is used to wait for a promise to resolve or reject before continuing with the execution of the code. When the promise is resolved, the value is returned, and when the promise is rejected, an error is thrown.
<br /><br />
<b style="color: #f1f100; font-family: cursive;">Async/await</b> helps to avoid the common pitfalls of traditional asynchronous programming, such as callback hell and pyramid of doom, and makes it easier to write clean, readable, and maintainable code.<br /><pre>function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
}

async function displayData() {
  const data = await getData();
  console.log(data);
}

displayData();

</pre>
<p align="center">OR</p>
<pre>function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printNumbers() {
  console.log('Starting...');
  
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    await delay(1000);
  }
  
  console.log('Finished!');
}

printNumbers();

</pre>`;
    day3Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que1.innerHTML = `Click me for Ans`;
    day3Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que3.innerHTML = `Click me for Ans`;
    day3Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que4.innerHTML = `Click me for Ans`;
    day3Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que5.innerHTML = `Click me for Ans`;
    day3Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que2.innerHTML = `Click me for Ans`;
    day3Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que7.innerHTML = `Click me for Ans`;
    day3Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que8.innerHTML = `Click me for Ans`;
    day3Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que9.innerHTML = `Click me for Ans`;
    day3Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que10.innerHTML = `Click me for Ans`;
  });
  day3Que7.addEventListener("click", () => {
    day3Que7.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que7.innerHTML = `In JavaScript, a <b style="color: #f1f100; font-family: cursive;">Temporal Dead Zone</b> (TDZ) is a period of time during the code execution where a variable exists in the scope but cannot be accessed due to a restriction known as "temporal dead zone". The TDZ occurs for let and const variables, which are block-scoped variables that cannot be accessed before they are declared.
<br /><br />
Here's an example code snippet to demonstrate TDZ:
<pre>console.log(x); // throws ReferenceError: x is not defined
let x = 10;

</pre>
<p align="center">OR</p><pre>let x;
console.log(x); // undefined
x = 10;
console.log(x); // 10

</pre>
`;
    day3Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que1.innerHTML = `Click me for Ans`;
    day3Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que3.innerHTML = `Click me for Ans`;
    day3Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que4.innerHTML = `Click me for Ans`;
    day3Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que5.innerHTML = `Click me for Ans`;
    day3Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que6.innerHTML = `Click me for Ans`;
    day3Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que2.innerHTML = `Click me for Ans`;
    day3Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que8.innerHTML = `Click me for Ans`;
    day3Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que9.innerHTML = `Click me for Ans`;
    day3Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que10.innerHTML = `Click me for Ans`;
  });
  day3Que8.addEventListener("click", () => {
    day3Que8.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que8.innerHTML = `The <b style="color: #f1f100; font-family: cursive;">for-in</b> loop in JavaScript is used to loop over the properties of an object. It is often used when you don't know the exact number of properties in an object, or when you want to perform a certain operation on all the properties of an object.
<br /><br />
Here's the syntax for the <b style="color: #f1f100; font-family: cursive;">for-in</b> loop:<pre>for (variable in object) {
  // code to be executed
}

</pre> Here's an example code that demonstrates how to use the for-in loop:<pre>const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};

for (let property in person) {
  console.log(&#x27 &#x24{property}: &#x24{person[property]}&#x27);
}

</pre>`;
    day3Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que1.innerHTML = `Click me for Ans`;
    day3Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que3.innerHTML = `Click me for Ans`;
    day3Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que4.innerHTML = `Click me for Ans`;
    day3Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que5.innerHTML = `Click me for Ans`;
    day3Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que6.innerHTML = `Click me for Ans`;
    day3Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que7.innerHTML = `Click me for Ans`;
    day3Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que2.innerHTML = `Click me for Ans`;
    day3Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que9.innerHTML = `Click me for Ans`;
    day3Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que10.innerHTML = `Click me for Ans`;
  });
  day3Que9.addEventListener("click", () => {
    day3Que9.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que9.innerHTML = `<b style="color: #f1f100; font-family: cursive;">Scope</b> refers to the set of variables, functions, and objects that are accessible in a particular part of your code. There are different types of scope in JavaScript:
<br /><br />
1. <b style="color: #f1f100; font-family: cursive;">Local Scope:</b><br />
A variable declared within a function has local scope. It can only be accessed within the function in which it is declared.<pre>function myFunction() {
  var x = 10; // local variable
  console.log(x); // Output: 10
}
myFunction();
console.log(x); // Output: Uncaught ReferenceError: x is not defined

</pre>
2. <b style="color: #f1f100; font-family: cursive;">Block Scope:</b><br />
Variables declared with the let or const keywords inside a block ({}) have block scope. A block is any code surrounded by curly braces, such as an if statement or a for loop. Block scope variables can only be accessed within the block in which they are declared.
<br /><br />
Example:<pre>if (true) {
  let x = 10; // block scope variable
  console.log(x); // Output: 10
}
console.log(x); // Output: Uncaught ReferenceError: x is not defined

</pre>

3. <b style="color: #f1f100; font-family: cursive;">Functional Scope:</b><br />
A variable declared outside of a function has global scope, and can be accessed from any part of your code. However, this can lead to naming conflicts and other issues. One way to avoid this is by using functional scope. In this approach, you wrap your code in an anonymous function that is immediately invoked. Variables declared inside the function have local scope, and cannot be accessed outside of it.
<br /><br />Example:<pre>(function() {
  var x = 10; // functional scope variable
  console.log(x); // Output: 10
})();
console.log(x); // Output: Uncaught ReferenceError: x is not defined

</pre>

4. <b style="color: #f1f100; font-family: cursive;">Scope Chain:</b>
The scope chain is the hierarchy of scopes in your code. When you reference a variable, JavaScript looks for it in the current scope, and if it's not found, it looks in the outer scope, and so on until it reaches the global scope. This is called the scope chain.
<pre>var x = 10; // global variable

function outerFunction() {
  var y = 20; // outerFunction scope variable
  
  function innerFunction() {
    var z = 30; // innerFunction scope variable
    console.log(x + y + z); // Output: 60
  }

  innerFunction();
}

outerFunction();
console.log(x + y + z); // Output: Uncaught ReferenceError: y is not defined

</pre>
`;

    day3Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que1.innerHTML = `Click me for Ans`;
    day3Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que3.innerHTML = `Click me for Ans`;
    day3Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que4.innerHTML = `Click me for Ans`;
    day3Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que5.innerHTML = `Click me for Ans`;
    day3Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que6.innerHTML = `Click me for Ans`;
    day3Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que7.innerHTML = `Click me for Ans`;
    day3Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que8.innerHTML = `Click me for Ans`;
    day3Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que2.innerHTML = `Click me for Ans`;
    day3Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que10.innerHTML = `Click me for Ans`;
  });
  day3Que10.addEventListener("click", () => {
    day3Que10.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que10.innerHTML = `Null means that a variable has been declared but has been assigned a null value.
    <br /><br />undefined means that a variable has been declared but has not been assigned a value.
    <pre>let myValue = null;
let myOtherValue;

console.log(myValue); // logs null
console.log(myOtherValue); // logs undefined

if (myValue === null) {
  console.log("myValue is null");
}

if (myOtherValue === undefined) {
  console.log("myOtherValue is undefined");
}

</pre>
`;
    day3Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que1.innerHTML = `Click me for Ans`;
    day3Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que3.innerHTML = `Click me for Ans`;
    day3Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que4.innerHTML = `Click me for Ans`;
    day3Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que5.innerHTML = `Click me for Ans`;
    day3Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que6.innerHTML = `Click me for Ans`;
    day3Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que7.innerHTML = `Click me for Ans`;
    day3Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que8.innerHTML = `Click me for Ans`;
    day3Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que9.innerHTML = `Click me for Ans`;
    day3Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day3Que2.innerHTML = `Click me for Ans`;
  });
});
btn4.addEventListener("click", () => {
  hello.style.display = "none";
  btn4.style.backgroundColor="#fcdc00";
  btn4.style.color="#000";
  btn3.style.backgroundColor="forestgreen";
  btn3.style.color="#fff";
  btn2.style.backgroundColor="forestgreen";
  btn2.style.color="#fff";
  btn1.style.backgroundColor="forestgreen";
  btn1.style.color="#fff";
  btnFour();
  let day4Que1 = document.getElementById("day4Que1");
  let day4Que2 = document.getElementById("day4Que2");
  let day4Que3 = document.getElementById("day4Que3");
  let day4Que4 = document.getElementById("day4Que4");
  let day4Que5 = document.getElementById("day4Que5");
  let day4Que6 = document.getElementById("day4Que6");
  let day4Que7 = document.getElementById("day4Que7");
  let day4Que8 = document.getElementById("day4Que8");
  let day4Que9 = document.getElementById("day4Que9");
  let day4Que10 = document.getElementById("day4Que10");

  day4Que1.addEventListener("click", () => {
    // alert("Read Carefully");
    day4Que1.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que1.innerHTML = `In JavaScript, a symbol is a unique and immutable data type that can be used as an identifier for variables. <br /><br /> Here's an example code snippet:<pre>const name1 = Symbol('Ajay');
const name2 = Symbol('Ajay');

console.log(name1===name2); // false
console.log(typeof name1); //symbol

</pre>`;
    day4Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que2.innerHTML = `Click me for Ans`;
    day4Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que3.innerHTML = `Click me for Ans`;
    day4Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que4.innerHTML = `Click me for Ans`;
    day4Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que5.innerHTML = `Click me for Ans`;
    day4Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que6.innerHTML = `Click me for Ans`;
    day4Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que7.innerHTML = `Click me for Ans`;
    day4Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que8.innerHTML = `Click me for Ans`;
    day4Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que9.innerHTML = `Click me for Ans`;
    day4Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que10.innerHTML = `Click me for Ans`;
  });
  day4Que2.addEventListener("click", () => {
    day4Que2.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que2.innerHTML = `Map and filter are two methods in JavaScript that allow you to manipulate arrays easily.
<br /><br />
Map creates a new array by applying a function to each element in the original array. Here's an example: 
<pre>
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

</pre>
Filter, on the other hand, creates a new array containing only the elements that pass a certain test. Here's an example:
<pre>const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

</pre>`;
    day4Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que1.innerHTML = `Click me for Ans`;
    day4Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que3.innerHTML = `Click me for Ans`;
    day4Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que4.innerHTML = `Click me for Ans`;
    day4Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que5.innerHTML = `Click me for Ans`;
    day4Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que6.innerHTML = `Click me for Ans`;
    day4Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que7.innerHTML = `Click me for Ans`;
    day4Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que8.innerHTML = `Click me for Ans`;
    day4Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que9.innerHTML = `Click me for Ans`;
    day4Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que10.innerHTML = `Click me for Ans`;
  });
  day4Que3.addEventListener("click", () => {
    day4Que3.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que3.innerHTML = `In JavaScript, when you pass a variable to a function, it can be passed by value or by reference.
<br /><br />
When a variable is passed by value, a copy of the value is created and passed to the function. This means that any changes made to the parameter within the function will not affect the original variable.
<br /><br />
Here's an example:
<pre>function updateValue(value) {
  value = 2;
}

let num = 1;
updateValue(num);
console.log(num); // Output: 1

</pre>
On the other hand, when a variable is passed by reference, a reference to the variable is passed to the function. This means that any changes made to the parameter within the function will affect the original variable.
<br /><br />
Here's an example:
<pre>function updateArray(array) {
  array.push(4);
}

let arr = [1, 2, 3];
updateArray(arr);
console.log(arr); // Output: [1, 2, 3, 4]
</pre>`;
    day4Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que1.innerHTML = `Click me for Ans`;
    day4Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que2.innerHTML = `Click me for Ans`;
    day4Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que4.innerHTML = `Click me for Ans`;
    day4Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que5.innerHTML = `Click me for Ans`;
    day4Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que6.innerHTML = `Click me for Ans`;
    day4Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que7.innerHTML = `Click me for Ans`;
    day4Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que8.innerHTML = `Click me for Ans`;
    day4Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que9.innerHTML = `Click me for Ans`;
    day4Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que10.innerHTML = `Click me for Ans`;
  });
  day4Que4.addEventListener("click", () => {
    day4Que4.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que4.innerHTML = ``;
    day4Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que1.innerHTML = `Click me for Ans`;
    day4Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que3.innerHTML = `Click me for Ans`;
    day4Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que2.innerHTML = `Click me for Ans`;
    day4Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que5.innerHTML = `Click me for Ans`;
    day4Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que6.innerHTML = `Click me for Ans`;
    day4Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que7.innerHTML = `Click me for Ans`;
    day4Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que8.innerHTML = `Click me for Ans`;
    day4Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que9.innerHTML = `Click me for Ans`;
    day4Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que10.innerHTML = `Click me for Ans`;
  });
  day4Que5.addEventListener("click", () => {
    day4Que5.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que5.innerHTML = ``;
    day4Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que1.innerHTML = `Click me for Ans`;
    day4Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que3.innerHTML = `Click me for Ans`;
    day4Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que4.innerHTML = `Click me for Ans`;
    day4Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que2.innerHTML = `Click me for Ans`;
    day4Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que6.innerHTML = `Click me for Ans`;
    day4Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que7.innerHTML = `Click me for Ans`;
    day4Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que8.innerHTML = `Click me for Ans`;
    day4Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que9.innerHTML = `Click me for Ans`;
    day4Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que10.innerHTML = `Click me for Ans`;
  });
  day4Que6.addEventListener("click", () => {
    day4Que6.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que6.innerHTML = ``;
    day4Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que1.innerHTML = `Click me for Ans`;
    day4Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que3.innerHTML = `Click me for Ans`;
    day4Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que4.innerHTML = `Click me for Ans`;
    day4Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que5.innerHTML = `Click me for Ans`;
    day4Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que2.innerHTML = `Click me for Ans`;
    day4Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que7.innerHTML = `Click me for Ans`;
    day4Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que8.innerHTML = `Click me for Ans`;
    day4Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que9.innerHTML = `Click me for Ans`;
    day4Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que10.innerHTML = `Click me for Ans`;
  });
  day4Que7.addEventListener("click", () => {
    day4Que7.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que7.innerHTML = ``;
    day4Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que1.innerHTML = `Click me for Ans`;
    day4Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que3.innerHTML = `Click me for Ans`;
    day4Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que4.innerHTML = `Click me for Ans`;
    day4Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que5.innerHTML = `Click me for Ans`;
    day4Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que6.innerHTML = `Click me for Ans`;
    day4Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que2.innerHTML = `Click me for Ans`;
    day4Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que8.innerHTML = `Click me for Ans`;
    day4Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que9.innerHTML = `Click me for Ans`;
    day4Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que10.innerHTML = `Click me for Ans`;
  });
  day4Que8.addEventListener("click", () => {
    day4Que8.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que8.innerHTML = ``;
    day4Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que1.innerHTML = `Click me for Ans`;
    day4Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que3.innerHTML = `Click me for Ans`;
    day4Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que4.innerHTML = `Click me for Ans`;
    day4Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que5.innerHTML = `Click me for Ans`;
    day4Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que6.innerHTML = `Click me for Ans`;
    day4Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que7.innerHTML = `Click me for Ans`;
    day4Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que2.innerHTML = `Click me for Ans`;
    day4Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que9.innerHTML = `Click me for Ans`;
    day4Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que10.innerHTML = `Click me for Ans`;
  });
  day4Que9.addEventListener("click", () => {
    day4Que9.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que9.innerHTML = ``;

    day4Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que1.innerHTML = `Click me for Ans`;
    day4Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que3.innerHTML = `Click me for Ans`;
    day4Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que4.innerHTML = `Click me for Ans`;
    day4Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que5.innerHTML = `Click me for Ans`;
    day4Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que6.innerHTML = `Click me for Ans`;
    day4Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que7.innerHTML = `Click me for Ans`;
    day4Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que8.innerHTML = `Click me for Ans`;
    day4Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que2.innerHTML = `Click me for Ans`;
    day4Que10.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que10.innerHTML = `Click me for Ans`;
  });
  day4Que10.addEventListener("click", () => {
    day4Que10.style.cssText =
      "background-color:green; padding-top: 15px; padding-bottom: 15px;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que10.innerHTML = ``;
    day4Que1.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que1.innerHTML = `Click me for Ans`;
    day4Que3.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que3.innerHTML = `Click me for Ans`;
    day4Que4.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que4.innerHTML = `Click me for Ans`;
    day4Que5.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que5.innerHTML = `Click me for Ans`;
    day4Que6.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que6.innerHTML = `Click me for Ans`;
    day4Que7.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que7.innerHTML = `Click me for Ans`;
    day4Que8.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que8.innerHTML = `Click me for Ans`;
    day4Que9.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que9.innerHTML = `Click me for Ans`;
    day4Que2.style.cssText =
      "background-color:rgb(104, 104, 222); padding-top: auto; padding-bottom: auto;font-family: Sans-serif; font-size: 18px;line-height: 30px;";
    day4Que2.innerHTML = `Click me for Ans`;
  });
});
