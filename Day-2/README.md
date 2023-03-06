# Day 2: 

## Functions and Conditionals

### Functions and their syntax

Functions are reusable blocks of code that perform a specific task. 
You can define a function using the `function` keyword followed by the function name, parentheses, and curly braces. 

Here's an example:

```javascript
   function sayHello() {
       console.log("Hello, world!");
   }
```

In this example, we define a function called `sayHello` that simply logs the message "Hello, world!" to the console. 
To call this function, we simply write its name followed by parentheses:

```javascript
   sayHello(); // Output: Hello, world!
```

### Function parameters and return values

Functions can also accept input parameters and return output values. 
Input parameters are defined in the parentheses after the function name, and output values are returned using the `return` keyword. 

Here's an example:

```javascript
   function sum(x, y) {
     return x + y;
  }
```

In this example, we define a function called `sum` that accepts two input parameters `x` and `y`. 
The function adds these two parameters together using the `+` operator and returns the result using the `return` keyword. 
To call this function, we pass in two values as arguments:

```javascript
   console.log(sum(2, 3)); // Output: 5
```

### Conditional statements (if-else and switch)

Conditional statements allow you to execute different blocks of code depending on whether a certain condition is true or false. 
In JavaScript, you can use the `if-else` statement and the `switch` statement to create conditional logic.

The `if-else` statement allows you to execute one block of code if a certain condition is true, 
and another block of code if the condition is false.

Here's an example:
```Javascript 
   let age = 18;

   if (age >= 18) {
     console.log("You are an adult.");
   } else {
     console.log("You are a minor.");
   }
```

In this example, we use the `if` keyword followed by a condition in parentheses.
If the condition is true, the code block inside the curly braces is executed. 
If the condition is false, the code block inside the `else` clause is executed.

The `switch` statement is similar to the `if-else` statement, but it allows you to test a variable against multiple values. 

Here's an example:

```javascript
   let day = "Monday";

   switch (day) {
     case "Monday":
       console.log("Today is Monday.");
       break;
     case "Tuesday":
       console.log("Today is Tuesday.");
       break;
     case "Wednesday":
       console.log("Today is Wednesday.");
       break;
     default:
       console.log("I don't know what day it is.");
   }
```

In this example, we use the `switch` keyword followed by the variable we want to test. 
We then define multiple cases using the `case` keyword, followed by the value we want to test against. 
If the value of the variable matches one of the cases, the corresponding code block is executed. 
We can also include a `default` case, which is executed if none of the other cases match.

***These are the basic concepts of functions and conditionals in JavaScript. 
Understanding these concepts is essential to writing efficient and effective code in JavaScript.****

<hr />
<h3 align="center">If my content is useful then give me star 🌟 on this repo.<h3>
   
   
<div align="center">Made with ❤️ by <a href="https://github.com/Ajay-Dhangar" target="_blank">Ajay-Dhangar</a></div>

