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

function countAlphabets(str, n) {
  // initialize an empty map
  let map = new Map();

  // iterate over the string
  for (let i = 0; i < n; i++) {
    // convert to lowercase to avoid case sensitivity
    let char = str.charAt(i).toLowerCase();

    // if the character is an alphabet, update the map
    if (/[a-z]/.test(char)) {
      if (map.has(char)) {
        map.set(char, map.get(char) + 1);
      } else {
        map.set(char, 1);
      }
    }
  }

  // print the count of each alphabet
  for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
  }
}

// prompt the user to enter a string and a length
let str = prompt("Enter a string:");
let n = str.length;

// call the countAlphabets function with the user input
countAlphabets(str, n);
