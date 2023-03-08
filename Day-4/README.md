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

</p>
<p>I hope this helps you understand the basics of JavaScript objects and properties. Let me know if you have any further questions!
</p>
