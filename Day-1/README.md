# Day 1 

## 1. Introduction to JavaScript:

JavaScript is a high-level, interpreted programming language that is widely used for web development. 
It was originally developed by Brendan Eich at Netscape Communications Corporation in 1995. 
Since then, it has become an essential component of web development and is supported by all modern web browsers.

## 2. Setting up your development environment:

Before you can start writing JavaScript code, you'll need to set up your development environment. 
You can use any code editor of your choice, such as Visual Studio Code, Sublime Text, or Atom.

## 3. Running your first JavaScript code:

Once you have your development environment set up, you can start writing and running JavaScript code. 
Here's an example of a basic JavaScript program that prints a message to the console:

```javascript
console.log("Hello, world!");
```

This program uses the `console.log()` function to print the message "Hello, world!" to the console. 
The `console.log()` function is a built-in function in JavaScript that outputs a message to the console.

## 4. Variables, data types, and operators:

In JavaScript, variables are used to store data values. 
They are declared using the `var`, `let`, or `const` keyword. 
Here's how each of these keywords works:

1. **`var`:** This keyword declares a variable with function scope or global scope, depending on where it is declared. 
   Variables declared with `var` can be redeclared and reassigned within the same scope. 
   
   Here's an example:
   
   ```javascript
      function myFunction() {
          var x = 10;
          if (true) {
              var x = 20;
              console.log(x); // Output: 20
          }
          console.log(x); // Output: 20
      }
   ```
   In this example, the variable `x` is declared with `var` in the function scope. 
   The if statement also declares a variable named `x` within its block, which redeclares the variable `x` in the function scope. 
   When `console.log(x)` is called within the if statement, it outputs `20`. 
   Similarly, when `console.log(x)` is called outside the if statement, it also outputs `20`.


2. **`let`:** This keyword declares a variable with block scope. 
   Variables declared with `let` can be reassigned, but not redeclared, within the same scope. 
 
   Here's an example:
  
   ```JavaScript 
      function myFunction() {
         let x = 10;
         if (true) {
            let x = 20;
            console.log(x); // Output: 20
         }
         console.log(x); // Output: 10
      }
   ```

   In this example, the variable `x` is declared with `let` in the function scope. 
   The if statement also declares a variable named `x` within its block, but it does not redeclare the variable `x` in the function scope. 
   When `console.log(x)` is called within the if statement, it outputs `20`. When `console.log(x)` is called outside the if statement, it    outputs `10`.

3. **`const`:** This keyword declares a constant variable with block scope. 
   Variables declared with `const` cannot be reassigned or redeclared within the same scope. 
 
   Here's an example:
   ```JavaScript 
      function myFunction() {
      const x = 10;
         if (true) {
         const x = 20;
         console.log(x); // Output: 20
      }
      console.log(x); // Output: 10
     }
   ```
 
 <hr/>
 
 The main difference between `let` and `const` in JavaScript is that variables declared with `let` can be reassigned, whereas variables declared  with `const` cannot be reassigned.
 
 Here's an example that illustrates the difference:
 
 ```javascript
    let x = 10;
    x = 20;
    console.log(x); // Output: 20

    const y = 10;
    y = 20; // Throws an error
    console.log(y);
 ```
 
 In this example, we declare a variable `x` with the `let` keyword and a variable `y` with the `const` keyword. 
 We assign the value `10` to both variables. We then reassign the value `20` to `x` and try to reassign `20` to `y`. 
 When we try to reassign `20` to `y`, it throws an error because `y` is a constant and cannot be reassigned.

So in summary, if you have a variable that you know should not be reassigned, use `const`. If you have a variable that may need to be reassigned, use `let`.
 
 <hr />
 
Here's an example of how to declare a variable:

```javascript
let name = "Ajay";
```

This declares a variable named `name` and initializes it with the value "Ajay". 
The `let` keyword is used to declare a variable in JavaScript.

JavaScript supports several data types, including strings, numbers, booleans, and objects. Here are some examples:

```javascript
let message = "Hello";
let age = 22;
let isStudent = true;
let person = { name: "Ajay", age: 22 };
```

In this example, `message` is a string, `age` is a number, `isStudent` is a boolean, and `person` is an object.

JavaScript also supports various operators, such as arithmetic operators, comparison operators, and logical operators. 

Here are some examples:

```javascript
let a = 10;
let b = 5;
let sum = a + b; // 15
let difference = a - b; // 5
let product = a * b;  // 50
let quotient = a / b; // 2
let isEqual = a === b; // false 
let isNotEqual = a !== b; // true
let isGreater = a > b; // true
let isLess = a < b;   // false
let andOperator = true && false;  // false
let orOperator = true || false; // true
let notOperator = !true;   // false
```

In this example, `sum` is the result of adding `a` and `b`, `difference` is the result of subtracting `b` from `a`, and so on.

That covers the basics of Day 1's concepts in JavaScript. 
Try practicing these concepts with some simple exercises to get comfortable with the language.

## Data Types and Operators

### JavaScript has several built-in data types, including:

1. **Number:** This data type represents numeric values, both integers and floating-point numbers. 

   Here's an example:
   
   ```javascript
      let x = 10;
      let y = 3.14;
   ```
   
2. **String:** This data type represents text values, enclosed in single or double quotes. 

   Here's an example:
   
   ```javascript
      let name = 'Ajay';
      let message = "Hello, world!";
   ```
   
3. **Boolean:** This data type represents a logical value of true or false. 

   Here's an example:
   
   ```Javascript 
      let isRunning = true;
      let isLoggedIn = false;
   ```
   
4. **Undefined:** This data type represents a variable that has been declared but has no value assigned to it. 

   Here's an example:
   
   ```JavaScript 
      let x;
      console.log(x); // Output: undefined
   ```
   
   
5. **Null:** This data type represents a variable that has been explicitly assigned the value null. 

   Here's an example:
   
   ```JavaScript 
      let x = null;
      console.log(x); // Output: null
   ```
   
### JavaScript also has several operators, including:

1. **Arithmetic operators:** These operators perform mathematical calculations.

   Here's an example:
   
   ```Javascript 
      let x = 10;
      let y = 3;
      console.log(x + y); // Output: 13
      console.log(x - y); // Output: 7
      console.log(x * y); // Output: 30
      console.log(x / y); // Output: 3.3333333333333335
      console.log(x % y); // Output: 1
   ```

2. **Assignment operators:** These operators assign values to variables. 

   Here's an example:   
   
   ```Javascript 
      let x = 10;
      x += 5; // Equivalent to x = x + 5
      console.log(x); // Output: 15
   ```
   
3. **Comparison operators:** These operators compare two values and return a Boolean value of true or false. 

   Here's an example:
   
   ```JavaScript 
      let x = 10;
      let y = 5;
      console.log(x > y); // Output: true
      console.log(x < y); // Output: false
      console.log(x >= y); // Output: true
      console.log(x <= y); // Output: false
      console.log(x === y); // Output: false
      console.log(x !== y); // Output: true
   ```   
   
4. **Logical operators:** These operators perform logical operations and return a Boolean value of true or false. 
   
   Here's an example:
   
   ```Javascript 
      let x = 10;
      let y = 5;
      console.log(x > 5 && y < 10); // Output: true
      console.log(x > 5 || y < 2); // Output: true
      console.log(!(x > y)); // Output: false
   ```
   
   
5. **String operators:** These operators concatenate or combine strings. 

   Here's an example:
   
   ```JavaScript 
      let firstName = 'Ajay';
      let lastName = 'Dhangar';
      console.log(firstName + ' ' + lastName); // Output: Ajay Dhangar
   ```

***These are some of the basic data types and operators in JavaScript that you should know to get started with the language.***
   
   
Now Go to practicals [index.js](https://github.com/JavaScript-Mastery/javascript-mastery/blob/main/index.js)


<div align="center">Made with ❤️ by <a href="https://github.com/Ajay-Dhangar" target="_blank">Ajay-Dhangar</a></div>

