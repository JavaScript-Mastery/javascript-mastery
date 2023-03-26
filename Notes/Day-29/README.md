# Day-29	Advanced JavaScript Concepts

1. Closures:
Closures are an important concept in JavaScript. 
A closure is created when a function is defined inside another function, and the inner function has access to the outer function's v
ariables and parameters, even after the outer function has returned. 

Here's an example:

```js
function outerFunction() {
  var outerVar = "Hello, world!";
  function innerFunction() {
    console.log(outerVar);
  }
  return innerFunction;
}

var innerFunc = outerFunction();
innerFunc(); // outputs "Hello, world!"
```

In this example, `innerFunction` is defined inside `outerFunction`, and it has access to the `outerVar` variable, even after 
`outerFunction` has returned. The `innerFunction` is returned from `outerFunction`, and is assigned to the variable innerFunc. 
When `innerFunc` is called, it outputs the value of `outerVar`.

2. Prototypal Inheritance:
JavaScript uses prototypal inheritance, which means that objects can inherit properties and methods from other objects. 

Here's an example:

```js
var parent = {
  name: "John",
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
};

var child = Object.create(parent);
child.name = "Jane";

child.sayHello(); // outputs "Hello, my name is Jane"
```

In this example, `child` is created using the `Object.create()` method, and it inherits the `name` property and `sayHello` method 
from `parent`. 
The `child` object overrides the `name` property, so when `sayHello` is called `on` child, it outputs "Hello, my name is Jane".

3. Promises:

Promises are a way to handle asynchronous operations in JavaScript.
A promise represents a value that may not be available yet, but will be available at some point in the future. 

Here's an example:

```js
function getData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var data = { name: "John", age: 30 };
      resolve(data);
    }, 1000);
  });
}

getData().then(function(data) {
  console.log(data);
});
```

In this example, `getData` returns a promise that resolves after 1 second. 
When the promise resolves, the `then` method is called on the promise, which outputs the data returned by the promise.

4. Generators:

Generators are a way to create iterators in JavaScript. 
A generator is a function that can be paused and resumed at any point, allowing it to generate a sequence of values over time. 

Here's an example:

```js
function* countToTen() {
  for (var i = 1; i <= 10; i++) {
    yield i;
  }
}

var iterator = countToTen();

console.log(iterator.next().value); // outputs 1
console.log(iterator.next().value); // outputs 2
console.log(iterator.next().value); // outputs 3
```

In this example, `countToTen` is a generator function that generates the numbers 1 through 10. 
The `iterator` variable is created by calling the `countToTen`+
function, and it is used to iterate over the sequence of numbers generated 
by the generator.

5. Async/Await:

Async/await is a way to write asynchronous code that looks synchronous. 
It is built on top of promises and allows you to write code that "waits" for a promise to resolve before continuing. 

Here's an example:

```js
function getData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var data = { name: "John", age: 30 };
      resolve(data);
    }, 1000);
  });
}

async function logData() {
  var data = await getData();
  console.log(data);
}

logData(); // outputs { name: "John", age: 30 }
```

In this example, `logData` is an async function that uses `await` keyword to wait for the `getData` promise to resolve before continuing. 
When the promise resolves, the `data` variable is assigned the resolved value, and then it is logged to the console.

6. Spread Syntax:

The spread syntax is a way to spread the elements of an array or object into another array or object. 

Here's an example:

```js
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // outputs [1, 2, 3, 4, 5, 6]

var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };

var combinedObj = {...obj1, ...obj2};
console.log(combinedObj); // outputs {a: 1, b: 2, c: 3, d: 4}
```

In this example, the spread syntax is used to combine two arrays into one, and two objects into one. 
The elements of the arrays and the properties of the objects are spread into the new array or object.

7. Destructuring:
Destructuring is a way to extract values from an object or array and assign them to variables. 

Here's an example:

```js
var obj = { name: "John", age: 30 };

var { name, age } = obj;

console.log(name); // outputs "John"
console.log(age); // outputs 30

var arr = [1, 2, 3];

var [a, b, c] = arr;

console.log(a); // outputs 1
console.log(b); // outputs 2
console.log(c); // outputs 3
```

In this example, the destructuring syntax is used to extract the `name` and `age` properties from the `obj` object, and the `a`, `b`, and 
`c` values from the arr array. 
The extracted values are assigned to new variables with the same name.
