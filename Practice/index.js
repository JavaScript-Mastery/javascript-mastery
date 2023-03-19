// =================================
// Basic
// =================================
// ===================
// Day-1
//====================

// =====================================
//Your first program in JavaScript
// ======================================
// console.log("Hello World!");

// ================
// Data Types and Operators
//===============
// 1. Number:
// ===============
// let n = 10; //integer type
// let m = 5.78; // float type
// console.log(n);
// console.log(m);
// ===============
// 2. String:
// =============
// let firstName = "Ajay";
// let lastName = "Dhangar";
// let fullName = firstName + " " + lastName;
// console.log("firstName: " + firstName);
// console.log("lastName: " + lastName);
// console.log("fullName: " + fullName);

//================
//3. Boolean:
//===============

// let x = 5;
// let y = 10;
// console.log(x > y); // false
// console.log(x < y); // true

//======================
// 4. Undefined
//===============

// let a; // a is decleared but not assign any value
// console.log(a); // undefined
//=======================
//5. NULL:
//=======================
// let x = null;
// console.log(x); //null

//==========================
//Jvascript operators
//========================
//1. Arithmetic operators: ( +, -, /, *, %)
//=======================

// let a = 10;
// let b = 5;

// console.log(a + b); // 10+5 = 15
// console.log(a - b); // 10-5 = 5
// console.log(a * b); // 10x5 = 50
// console.log(a / b); // 10/5 = 2
// console.log(a % b); // 10%5 = 0
// console.log((a + b) * (a - b)); //(15x5) = 75

// ======================
// 2. Assignment operators:
//=======================

// let a = 5;
// a += 10; // a = a+10 = 5+10 =15
// a = a + 3; // 15 + 3 = 18
// console.log(a); //18
//
// ========================
// 3. Comparison operators:
//==========================
// let a = 5;
// let b = 10;

// console.log(a > b); // false
// console.log(a < b); // true
// console.log(a == b); // false
// console.log(a === b); //false
// console.log(a !== b); //true
// console.log(a <= b); //true
// console.log(a >= b); //false

//======================
// Differents between (a==b) and (a===b)
//========================
// let a = 4; // number type
// let b = "4"; // String Type
// console.log(a == b); // true: (check only value)
// console.log(a === b); //false: (But It is check value and data type If both are same then print true otherwise print false)
//
//====================
// 4. Logical operators:
//====================

// let a = 5;
// let b = 6;
// console.log(a < 10 || b > 10); // true (OR Logic)
// console.log(a < 10 && b > 10); // false (AND Logic)
// console.log(!(a > b)); // true (NOT Logic)

//====================
// 5. String operators:
//====================

// let fName = "Ajay";
// let lName = "Dhangar";

// let fullName = fName + " " + lName;
// console.log(fullName); // Ajay Dhangar

// let name = "John";
// const age = 30;

// console.log(name, age);

// =================
// Output: John 30
// =================
// =================================
//  Functions:
// =================================

// let num1 = 5;
// let num2 = 6;
// console.log(addNumbers(num1, num2));
// function addNumbers(num1, num2) {
//   return num1 + num2;
// }
// =================
// Output: 11
// =================
// =================================
// Conditionals:
// =================================

// const age = 30;
// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are not an adult.");
// }
// =================
// Output: You are an adult.
// =================
// =================================
// Loops:
// =================================

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// =================
// Output:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// =================
// =================================
// Objects:
// =================================
// const person = {
//   name: "John",
//   age: 30,
//   sayHello: function () {
//     console.log("Hello!");
//   },
// };
// let ans = person;
// console.log(ans);
// =================
// Output: { name: 'John', age: 30, sayHello: [Function: sayHello] }
// =================

// =========================================
// operators and expressions in JavaScript
// =========================================

// ================
// Operators:
// ================
// ================
// 1. Arithmetic Operators:

// Arithmetic operators are used to perform mathematical operations on numeric values.
// ================
// let x = 10;
// let y = 5;
// console.log(x + y); // Addition operator (+) || Output: 15
// console.log(x - y); // Subtraction operator (-) || Output: 5
// console.log(x * y); // Multiplication operator (*) || Output: 50
// console.log(x / y); // Division operator (/) || Output: 2
// console.log(x % y); // Modulus operator (%) || Output: 0
// console.log(++x); // Increment operator (++) || Output: 11
// console.log(--y); // Decrement operator (--) || Output: 4

// ================
// 2. Comparison Operators:
// Comparison operators are used to compare two values.
// ================
// let x = 10;
// let y = 5;

// console.log(x > y); // Output: true
// console.log(x < y); // Output: false
// console.log(x >= y); // Output: true
// console.log(x <= y); // Output: false
// console.log(x == y); // Output: false
// console.log(x != y); // Output: true

// ================
// 3. Logical Operators:
// ================
// let x = 10;
// let y = 5;

// console.log(x > 5 && y > 5); // Logical AND (&&) Output: false
// console.log(x > 5 || y > 5); // Logical OR (||) Output: true
// console.log(!(x > 5)); // Logical NOT (!) Output: false

// ================
// 4. Assignment Operators:
// Assignment operators are used to assign values to variables.
// ================

// let x = 10;
// x += 5; // x = x + 5;
// console.log(x); // Output: 15

// x -= 5; // x = x - 5;
// console.log(x); // Output: 10

// x *= 2; // x = x * 2;
// console.log(x); // Output: 20

// x /= 4; // x = x / 4;
// console.log(x); // Output: 5

// x %= 3; // x = x % 3;
// console.log(x); // Output: 2

// x **= 3; // x = x ** 3;
// console.log(x); // Output: 8

// =================
// 5. Conditional (Ternary) Operator:
// The conditional operator is a shorthand version of an if...else statement.
// =================
// let x = 10;
// let y = 5;
// let result = x > y ? "x is greater than y" : "x is less than or equal to y";
// console.log(result); // Output: "x is greater than y"

//====================
// Bitwise Operators:
// Bitwise operators are used to perform bitwise operations on binary numbers.
//====================

// let x = 5; // Binary: 0101
// let y = 10; // Binary: 1010
// console.log(x & y); // Bitwise AND (&) -> 0000 (0)
// console.log(x | y); // Bitwise OR (|)  -> 1111 (15)
// console.log(x ^ y); // Bitwise XOR (^) -> 1111 (15)
// console.log(~x); // Bitwise NOT (~) -> 1010 (-6)
// console.log(x << 1); // Left shift (<<) -> 1010 (10)
// console.log(x >> 1); // Right shift (>>) -> 0010 (2)

//====================
// Comma Operator:
// The comma operator is used to separate expressions in a statement and returns the value of the last expression.
//====================

// let x = 1,
//   y = 2,
//   z = 3;
// let result = (x + y, y + z);
// console.log(result); // Output: 5

// =================
// Expressions:
// =================
// 1. Primitive Expressions
// =================
// Primitive expressions are the simplest types of expressions and include literals and variables.
// =================
// let x = 5; // Numeric literal
// let y = "hello"; // String literal
// let z = true; // Boolean literal
// console.log(x); // Output: 5
// console.log(y); // Output: hello
// console.log(z); // Output: true
//===========================
// 2. Arithmetic Expressions:
//===========================
// Arithmetic expressions use arithmetic operators to perform mathematical operations.
//==========================
// let x = 5 + 2 * 3; // Output: 11
// let y = (5 + 2) * 3; // Output: 21
// console.log(x);
// console.log(y);
//===========================
// 3. Comparison Expressions:
//===========================
// Comparison expressions use comparison operators to compare values.
//============================
// let x = 5;
// let y = 10;
// console.log(x > y); // Output: false
// console.log(x == y); // Output: false
// console.log(x != y); // Output: true
//======================
// 4. Logical Expressions:
//======================
// Logical expressions use logical operators to combine or negate logical values.
//======================
// let x = 5;
// let y = 10;
// console.log(x < 10 && y > 5); // Output: true
// console.log(x > 10 || y < 5); // Output: false
// console.log(!(x < y)); // Output: false
//==========================
// 5. Function Expressions:
//==========================
// Function expressions define a function as a variable and can be called like a regular function.
//==========================
// let add = function (x, y) {
//   return x + y;
// };
// let result = add(5, 10);
// console.log(result); // Output: 15
//=======================
// Object Expressions:
//=======================
// Object expressions define an object with properties and values.
//=======================
// let person = {
//   name: "John",
//   age: 30,
//   gender: "male",
// };
// console.log(person.name); // Output: "John"
// console.log(person.age); // Output: 30
// console.log(person.gender); // Output: "male"
//===========================
// Decision Making:
//===========================
//In JavaScript, decision-making is achieved using conditional statements.
//There are three types of conditional statements in JavaScript: if statement, if-else statement, and switch statement.
//Let's take a look at each of them with some code examples.
//========================
// 1. if statement: The if statement is used to execute a block of code if a condition is true.
//========================
// let x = 10;
// if (x > 5) {
//   console.log("x is greater than 5");
// }
// In the example above, the code inside the if statement will only be executed if the condition x > 5 is true.
// In this case, since x is 10, the condition is true and the code inside the if statement will be executed, which will output "x is greater than 5" to the console.
//=====================
// if-else statement: The if-else statement is used to execute one block of code if a condition is true, and another block of code if the condition is false.
//=====================
// let x = 3;
// if (x > 5) {
//   console.log("x is greater than 5");
// } else {
//   console.log("x is less than to 5");
// }
// In the example above, the condition x > 5 is false, so the code inside the else block will be executed, which will output "x is less than or equal to 5" to the console.
//========================
// switch statement: The switch statement is used to execute different blocks of code depending on the value of an expression.
//========================
// let day = "Wednesday";
// switch (day) {
//   case "Monday":
//     console.log("Today is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday");
//     break;
//   default:
//     console.log("Today is not Monday, Tuesday, or Wednesday");
// }
// In the example above, the switch statement checks the value of the day variable and executes the corresponding block of code.
// Since day is "Wednesday", the third case will be executed, which will output "Today is Wednesday" to the console.

// These are some of the common decision-making statements in JavaScript.
// I hope this helps you understand how to use them in your code!
//========================
// Iteration Statements:
//========================
// 1. for statement: The for statement is used to repeatedly execute a block of code until a condition is met.
//========================
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
//=========================
// 2. for...in statement: The for...in statement is used to loop through the properties of an object.
//=========================
// const obj = { a: 1, b: 2, c: 3 };

// for (let prop in obj) {
//   console.log(prop + ": " + obj[prop]);
// }
//===========================
// 3. for...of statement: The for...of statement is used to loop through the values of an iterable object.
//============================
// const arr = [1, 2, 3, 4, 5];

// for (let value of arr) {
//   console.log(value);
// }
//============================
// 4. while statement: The while statement is used to repeatedly execute a block of code while a condition is true.
//=============================
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// Output: 0 1 2 3 4
//==================
// 5. do...while loop - A do...while loop is used to execute a block of code once, and then repeat the loop as long as a specified condition is true.
//==================
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);
// Output: 0 1 2 3 4
// let string = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; i < 5; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);
//==============================

//
// ===================
//   functions
// ===================
// const str = "Hello, world!";

// function sayHello() {
//   console.log(str);
// }
// sayHello(); // Output: Hello, world!
//
// ========================

// function sum(x, y) {
//   return x + y;
// }
// console.log("Sum = " + sum(4, 5)); // Sum = 9

// ==================

// let a = parseInt(prompt("Enter a num1: "));
// let b = parseInt(prompt("Enter a num2: "));

// const result = multipli(a, b);

// console.log(
//   "Multiplication of " + `${a}` + " and " + `${b}` + " is " + `${result}`
// );
// for example a=9, b=8 then,
// Multiplication of 9 and 8 is 72

// function multipli(x, y) {
//   return x * y;
// }

// =================
//  Conditions
// =================
// =================
// 1. if...else
// ==============

// let age = 18;

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

// ===========================
// =================
// 2. Switch
// =================

// let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Today is Monday.");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday.");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday.");
//     break;
//   default:
//     console.log("I don't know what day it is.");
// }
// ========================================================
//
// Day-3 Arrays and Loops in  JavaScript

// Arrays:
//========================
// 1-D array
//========================
// let MyArray = [1, 2, "name", 2.0, "demo"];
// console.log(MyArray); // output: [1, 2, "name", 2.0, "demo"]

// ====== manipulate Arry ============

//let MyArray = [1, 2, "name", 2.0, "demo"];

// MyArray.push(6); // increase index and add new value 6

// console.log(MyArray); // output: [1, 2, "name", 2.0, "demo", 6]

// MyArray.pop(); // Decrease index and remove last value 6

// console.log(MyArray); // output: [1, 2, "name", 2.0, "demo"]

// MyArray.shift(); // remove index 1 or myArray[0]
// console.log(MyArray); // Output: [ 2, 'name', 2, 'demo' ]
// MyArray.unshift(0);
// console.log(MyArray); // Output: [ 0, 2, 'name', 2, 'demo' ]
// MyArray.splice(2, 1);
// console.log(MyArray); //Output:  [ 0, 2, 2, 'demo' ]
//=================================
// ====== loops =========
//=================================

let myArray = [1, 2, 3, 4, 5];

// for loop
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// for..in loop
// for (let index in myArray) {
//   console.log(myArray[index]);
// }

// for..of loop
// for (let element of myArray) {
//   console.log(element);
// }

// while loop
// let i = 0;
// while (i < myArray.length) {
//   console.log(myArray[i]);
//   i++;
// }

// do..while loop
// let j = 0;
// do {
//   console.log(myArray[j]);
//   j++;
// } while (j < myArray.length);

// nested loop
// let multiArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (let i = 0; i < multiArray.length; i++) {
//   for (let j = 0; j < multiArray[i].length; j++) {
//     console.log("multiArray [" + i + j + "] = " + multiArray[i][j]);
//   }
// }

//==================     ===================
// // Creating an object with properties
// const person = {
//   name: "John",
//   age: 30,
//   gender: "male",
//   occupation: "developer",
// };

// // Accessing properties using dot notation
// console.log(person.name); // Output: 'John'
// console.log(person.age); // Output: 30

// // Accessing properties using bracket notation
// console.log(person["gender"]); // Output: 'male'
// console.log(person["occupation"]); // Output: 'developer'

// // Adding new properties
// person.email = "john@example.com";

// // Modifying existing properties
// person.age = 31;

// // Deleting properties
// delete person.email;

// // Checking if a property exists
// console.log("gender" in person); // Output: true
// console.log("email" in person); // Output: false

// // Looping through all properties of an object
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// function countAlphabets(str, n) {
//   // initialize an empty map
//   let map = new Map();

//   // iterate over the string
//   for (let i = 0; i < n; i++) {
//     // convert to lowercase to avoid case sensitivity
//     let char = str.charAt(i).toLowerCase();

//     // if the character is an alphabet, update the map
//     if (/[a-z]/.test(char)) {
//       if (map.has(char)) {
//         map.set(char, map.get(char) + 1);
//       } else {
//         map.set(char, 1);
//       }
//     }
//   }

//   // print the count of each alphabet
//   for (let [key, value] of map) {
//     console.log(`${key}: ${value}`);
//   }
// }

// // prompt the user to enter a string and a length
// let str = prompt("Enter a string:");
// let n = str.length;

// // call the countAlphabets function with the user input
// countAlphabets(str, n);
//===================================
// create obejects & properties
// const person = {
//   name: "Ajay Dhangar",
//   age: 22,
//   about: "Web Developer",
//   hobbies: "Coding",
// };
// We can access properties with the help of . notation and bracket notation

// console.log(person.name);
// console.log(person["age"]);

// Now, add new properties with the help of . notation and bracket notation
// person.email = "info@gmail.com";

// person.phone_no = 1234567890;
// console.log(person.email);
// console.log(person.phone_no);
// Delete properties
// delete person.email;
// console.log(person.email);
// console.log("--------------------");
// update properties
// person.age = 20;
// if you print all with hte help of looping
// for (let key in person) {
//   console.log(key + ":" + person[key]);
// }

//============================

// let object1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// let object2 = {
//   a: 5,
//   d: 6,
//   e: 7,
// };
// let object3 = {
//   f: 8,
//   g: 9,
//   h: 10,
// };
// console.log(object1); // {a: 1, b: 2, c: 3}
// console.log(object1.a); // 1
// console.log(object2.a); // 5

//============================
// this (keyword)
// =================

// let newObject = {
//   firstname: "Ajay",
//   lastname: "Dhangar",
//   Age: 22,
//   print: function () {
//     console.log(
//       "Name: " +
//         this.firstname +
//         "-" +
//         this.lastname +
//         " | " +
//         "age: " +
//         this.Age
//     );
//   },
// };
// newObject.print(); //Name: Ajay-Dhangar | age: 22

// =====================================
// function addItem() {
//   var input = document.getElementById("input");
//   var text = input.value;
//   if (text === "") {
//     alert("Please enter an item.");
//   } else {
//     var item = document.createElement("li");
//     var itemText = document.createTextNode(text);
//     item.appendChild(itemText);
//     document.getElementById("list").appendChild(item);
//     input.value = "";
//   }
// }

// document.getElementById("list").addEventListener("click", function (e) {
//   if (e.target && e.target.nodeName == "LI") {
//     e.target.parentNode.removeChild(e.target);
//   }
// });
// ============================================
// const heading = document.getElementById("my-heading");
// const button = document.getElementById("my-button");
// const head = document.getElementById("my-name");

// button.addEventListener("click", function () {
//   heading.innerHTML = "Button clicked";
//   head.innerHTML = " By You ";
//   heading.style.color = "red";
//   head.style.color = "green";
// });
// var elements = document.getElementsByClassName("example");

// // Loop through the elements and change their text color
// for (var i = 0; i < elements.length; i++) {
//   if (i % 2 == 0) {
//     elements[i].style.color = "red";
//   } else {
//     elements[i].style.color = "blue";
//   }
// }
// var element = document.getElementsByTagName("div");
// for (var i = 0; i < elements.length; i++) {
//   if (i % 2 == 0) {
//     element[i].style.background = "#11f4ff";
//   } else {
//     element[i].style.background = "#fff411";
//   }
//   element[i].style.height = "50px";
// }
// ================================================
// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(10, 0));
// } catch (error) {
//   console.error(error.message);
// }
//=============================================
// ===== 1. Creating a regex object ======

// const regex = /pattern/;

// console.log(regex);

//=========================

// ========== 2. Matching literal text =======
// const regex = /hello/;
// const result = regex.test("hello world"); // returns true
// console.log(result);

//==============================

// ==== 3. Matching character sets ======

// const regex = /[abc]/;
// const result1 = regex.test("a"); // returns true
// const result2 = regex.test("d"); // returns false
// console.log(result1);
// console.log(result2);

// ==== OR =========
// const regex = /[0-9]/;
// const result1 = regex.test("5"); // returns true
// const result2 = regex.test("x"); // returns false
// console.log(result1);
// console.log(result2);
//==============================

//===== 4. Matching metacharacters===========

// const regex = /h.t/;
// const result1 = regex.test("hot"); // returns true
// const result2 = regex.test("hat"); // returns true
// const result3 = regex.test("h\nt"); // returns false
// const result4 = regex.test("hut"); // returns true
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

//========== OR =============

// const regex = /^hello$/;
// const result1 = regex.test("hello"); // returns true
// const result2 = regex.test("hello world"); // returns false
// console.log(result1);
// console.log(result2);

// ========================

// ====== 5. Matching quantifiers======

// const regex = /ab*c/;
// const result1 = regex.test("ac"); // returns true
// const result2 = regex.test("abc"); // returns true
// const result3 = regex.test("abbbc"); // returns true
// const result4 = regex.test("abxyc"); // returns false

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// =========================

// ======= 6. Matching with anchors ========

// const regex = /\bhello\b/;
// const result1 = regex.test("hello"); // returns true
// const result2 = regex.test("hello world"); // returns true
// const result3 = regex.test("sayhello"); // returns false
// console.log(result1);
// console.log(result2);
// console.log(result3);

// =====================

// ==== 7. Capturing groups ======

// const regex = /(\d{3})-(\d{3})-(\d{4})/;
// const input = "My phone number is 123-456-7890";
// const match = input.match(regex);
// console.log(match); // returns ["123-456-7890", "123", "456", "7890"]

//================================
// ===== 8. Non-capturing groups =====

// const regex = /(?:https?:\/\/)?(www\.)?google\.com/;
// const result1 = regex.test("http://www.google.com"); // returns true
// const result2 = regex.test("https://google.com"); // returns true
// const result3 = regex.test("www.google.com"); // returns true

// console.log(result1);
// console.log(result2);
// console.log(result3);

//===============================
// =====  9. Lookahead and lookbehind assertions =====

// // Positive lookahead assertion
// const regex1 = /foo(?=bar)/;
// const result1 = regex1.test("foobar"); // returns true
// const result2 = regex1.test("foobaz"); // returns false

// // Negative lookahead assertion
// const regex2 = /foo(?!bar)/;
// const result3 = regex2.test("foobar"); // returns false
// const result4 = regex2.test("foobaz"); // returns true

// // Positive lookbehind assertion
// const regex3 = /(?<=foo)bar/;
// const result5 = regex3.test("foobar"); // returns true
// const result6 = regex3.test("bazbar"); // returns false

// // Negative lookbehind assertion
// const regex4 = /(?<!foo)bar/;
// const result7 = regex4.test("foobar"); // returns false
// const result8 = regex4.test("bazbar"); // returns true

// console.log("result1 : " + result1);
// console.log("result2 : " + result2);
// console.log("result3 : " + result3);
// console.log("result4 : " + result4);
// console.log("result5 : " + result5);
// console.log("result6 : " + result6);
// console.log("result7 : " + result7);
// console.log("result8 : " + result8);

// =========================
