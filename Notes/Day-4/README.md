<p>Here's an example code that covers some basic concepts of JavaScript objects and properties:
</p>

```javascript
// Creating an object with properties
const person = {
  name: "John",
  age: 30,
  gender: "male",
  occupation: "developer",
};

// Accessing properties using dot notation
console.log(person.name); // Output: 'John'
console.log(person.age); // Output: 30

// Accessing properties using bracket notation
console.log(person["gender"]); // Output: 'male'
console.log(person["occupation"]); // Output: 'developer'

// Adding new properties
person.email = "john@example.com";

// Modifying existing properties
person.age = 31;

// Deleting properties
delete person.email;

// Checking if a property exists
console.log("gender" in person); // Output: true
console.log("email" in person); // Output: false

// Looping through all properties of an object
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

In this code, we start by creating an object called `person` with four properties: `name`, `age`, `gender`, and `occupation`. We can access these properties using dot notation (`person.name`) or bracket notation (`person['gender']`). We can add new properties to an object using dot notation (`person.email = 'john@example.com'`) or modify existing properties using dot notation (`person.age = 31`). We can delete properties using the delete operator (`delete person.email`).

We can check if a property exists in an object using the in operator (`'gender'` in person will return true but `'email'` in person will return false). Finally, we can loop through all the properties of an object using a `for...in` loop.

<hr / >

In JavaScript, both `Map` and `Object` are used to store key-value pairs, but they have some differences.

`Object` is a built-in data type in JavaScript and is used to represent a collection of properties or attributes. 
Each property has a name (or key) and a value. It is defined using curly braces {} and can be modified by adding, deleting, or updating properties.

For example:

```javascript
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name); // Output: "John"

person.name = "Jane";
console.log(person.name); // Output: "Jane"

delete person.age;
console.log(person); // Output: { name: "Jane", city: "New York" }
```
On the other hand, `Map` is a built-in class in JavaScript and is used to store key-value pairs as entries. Unlike objects, the keys in a `Map` can be of any type including objects, functions, and primitives. It is defined using the `Map()` constructor and can be modified by adding, deleting, or updating entries.

For example:

```javascript
let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);

console.log(myMap.get("name")); // Output: "John"

myMap.set("name", "Jane");
console.log(myMap.get("name")); // Output: "Jane"

myMap.delete("age");
console.log(myMap); // Output: Map { "name" => "Jane" }
```
In summary, while both `Object` and `Map` can store key-value pairs, Object is best suited for storing simple data and properties, while Map is best suited for more complex data structures that require flexible and varied keys.


</p>
<p>I hope this helps you understand the basics of JavaScript objects and properties. Let me know if you have any further questions!
</p>
