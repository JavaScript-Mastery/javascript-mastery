// ===============  Day 1 =======================
// ------ 1. Introduction to JavaScript:---------
//
//JavaScript:
//           JavaScript is a high - level, interpreted programming language
//           that is widely used for web development.It was originally developed
//           by Brendan Eich at Netscape Communications Corporation in 1995.
//           Since then, it has become an essential component of web development and
//           is supported by all modern web browsers.

// =======================================================

// -------- Running your first JavaScript code: --------

// console.log("Hello World!"); //Hello World!

//------------------------------------------------------
// Explaination: This program uses the `console.log()` function to print
//               the message “Hello, world!” to the console.
//               The `console.log()` function is a built -in function in
//               JavaScript that outputs a message to the console.
//------------------------------------------------------

// =======================================================

//======== Variables =========
// Variables: `var`, `let`, `const`
// var a = 5;
// let b = 6;
// const c = 7;
// console.log("a is  " + a); // a is 5
// console.log("b is  " + b); // b is 6
// console.log("c is  " + c); // c is 7

//------------------------------------------------------
//  var: This keyword declares a variable with function scope or global scope,
//       depending on where it is declared.Variables declared with var can be
//       redeclared and reassigned within the same scope.
//
//                ------------------------
//
//  let: This keyword declares a variable with block scope.
//         Variables declared with let can be reassigned, but not redeclared,
//         within the same scope.
//
//                ------------------------
//
//  const: This keyword declares a constant variable with block scope.
//         Variables declared with const cannot be reassigned or redeclared
//         within the same scope.
//------------------------------------------------------

// =======================================================

// ================= Data Types ===========
// Data Types: Number, String, Boolean, Undefined, null, etc.
// --------------- Number: -----------
// Number: This data type represents numeric values, both integers and floating-point numbers.

// let n = 5;
// let m = 6;
// console.log(n + m); // 11 (in n umber)

// =======================================================

// --------------- String: -----------
// String: This data type represents text values, enclosed in single or double quotes.

// let s1 = "Hello";
// let s2 = "World";
// console.log(s1); // Hello
// console.log(s2); // World
// console.log(s1 + " " + s2); // Hello World

// ---- OR ----
// let s1 = "5";
// let s2 = "6";
// console.log(s1); // 5
// console.log(s2); // 6
// console.log(s1 + s2); // 56 ( in string)

// =======================================================

// --------------- Boolean: -----------
// Boolean: This data type represents a logical value of true or false.

// let a = 5;
// let b = 7;
// console.log(a > b); // false

// =======================================================

// --------------- Undefined:  -----------
// Undefined: This data type represents a variable that has been declared but has no value assigned to it.

// let x;
// console.log(x); // undefined

// =======================================================

// --------------- Null: -----------
// Null: This data type represents a variable that has been explicitly assigned the value null.

// let x = null;
// console.log(x); // null

// =======================================================

//============ operators ========
// operators: Arithmetic operators, Assignment operators, Comparison operators, Logical operators, string operators, etc.

// ---------- 1. Arithmetic operators: ---------
// Arithmetic operators: These operators perform mathematical calculations.
// `+`, `-`, `/`, `*`, `%`

// let a = 8;
// let b = 4;
// console.log(a + b); // 12
// console.log(a - b); // 4
// console.log(a / b); // 2
// console.log(a * b); // 32
// console.log(a % b); // 0
// ============================
// for `%`
// 4) 8 (2
//   -8
// --------
//   0      // this is `%`
// ============================

// =======================================================

// ---------- 2. Assignment operators:  ---------
// Assignment operators: These operators assign values to variables.
// Assignment operators: `=`, `-=`, `+=`, `/=`, `*=`, etc.

// let a = 10;
// console.log(a); // 10
// a = 20;
// console.log(a); // 20 (update value)
// a -= 5;
// console.log(a); // 15 (update value)
// a += 20;
// console.log(a); // 35 (update value)
// a /= 5;
// console.log(a); // 7 (update value)

// =======================================================

// ---------- 3. Comparison operators:  ---------
// Comparison operators: These operators compare two values and return a Boolean value of true or false.
// `==`, `<`, `>`, `<=`, `>=`, `===`, `!=`

// let a = 10;
// let b = 20;
// let c = "10";
// console.log(a == b); // false
// console.log(a < b); // true
// console.log(a > b); // false
// console.log(a <= b); // true
// console.log(a >= b); // false
// console.log(a === b); // false
// console.log(a != b); // true
// console.log(a == c); // true (10 = 10 for value)
// console.log(a === c); // false (10=10 but data type is not same)

// =======================================================

// ---------- 4. Logical operators:  ---------
// Logical operators: These operators perform logical operations and return a Boolean value of true or false.
// `!` (NOT), `&&` (AND), `||` (OR)
//-----------------------
// ! : !false = true
//     !true = false
//-----------------------
// && : true && true = true
//      false && false = false
//      true && false = false
//-----------------------
// || : true || true = true
//      false || false = false
//      true || false = true
//-----------------------
//
// let a = 5;
// let b = 10;
// console.log(a < b || a > b); // true
// console.log(a < b && a > b); // false
// console.log(!(a > b)); // true

// =======================================================

// ---------- 5. String operators:  ---------

// `'...'` or `"..."

// let firstName = "Ajay";
// let lastName = "Dhangar";

// console.log(firstName); // Ajay
// console.log(lastName); // Dhangar
// console.log(firstName + " " + lastName); // Ajay Dhangar

// =================== complete Day-1 ==========================
