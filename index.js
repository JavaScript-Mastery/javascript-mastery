// =================================
// Basic
// =================================

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
let string = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; i < 5; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);
