
## Day-4	Objects and Properties

In JavaScript, objects are used to store collections of data and functions. Objects are essentially a group of key-value pairs, where each key is a property name, and each value can be any JavaScript data type, including another object or a function.

To create an object in JavaScript, you can use either object literal notation or the object constructor function.

Object Literal Notation:

```js
const myObj = {
  property1: value1,
  property2: value2,
  property3: value3,
  //...
};
```

Object Constructor Function:

```js
const myObj = new Object();
myObj.property1 = value1;
myObj.property2 = value2;
myObj.property3 = value3;
//...
```

To access an object's property, you can use dot notation or bracket notation:

Dot Notation:

```js
const myObj = {
  property1: value1,
  property2: value2,
  property3: value3,
};

console.log(myObj.property1); // output: value1
console.log(myObj.property2); // output: value2
console.log(myObj.property3); // output: value3
```

Bracket Notation:

```js
const myObj = {
  property1: value1,
  property2: value2,
  property3: value3,
};

console.log(myObj['property1']); // output: value1
console.log(myObj['property2']); // output: value2
console.log(myObj['property3']); // output: value3
```

You can also add or modify properties of an object using either notation:

```js
const myObj = {
  property1: value1,
  property2: value2,
  property3: value3,
};

myObj.property4 = value4; // Adding a new property
myObj.property1 = newValue; // Modifying an existing property
```

In addition, you can also use object methods, which are functions that are stored as properties of an object:

```js
const myObj = {
  property1: value1,
  property2: value2,
  method1: function() {
    console.log('Hello World!');
  }
};

myObj.method1(); // output: Hello World!
```

Here are some additional examples to help you better understand objects and properties in JavaScript:

Example 1: Creating an object with object literal notation and accessing its properties with dot notation and bracket notation.

```js
// create an object with object literal notation
const person = {
  name: "John",
  age: 30,
  "favorite color": "blue"
};

// accessing properties with dot notation
console.log(person.name); // output: John
console.log(person.age); // output: 30

// accessing properties with bracket notation
console.log(person["name"]); // output: John
console.log(person["age"]); // output: 30
console.log(person["favorite color"]); // output: blue
```

Example 2: Creating an object with the object constructor function and adding a new property with dot notation.

```js
// create an object with the object constructor function
const car = new Object();
car.make = "Honda";
car.model = "Civic";
car.year = 2020;

// add a new property with dot notation
car.color = "black";

console.log(car.make); // output: Honda
console.log(car.model); // output: Civic
console.log(car.year); // output: 2020
console.log(car.color); // output: black
```

Example 3: Using object methods to perform a calculation.

```js
// create an object with a method
const calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  }
};

// using the add method to perform a calculation
const result = calculator.add(5, 3);
console.log(result); // output: 8

// using the subtract method to perform a calculation
const result2 = calculator.subtract(10, 2);
console.log(result2); // output: 8
```

I hope these examples help you better understand objects and properties in JavaScript! Let me know if you have any further questions.
