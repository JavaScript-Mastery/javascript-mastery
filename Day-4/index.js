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
