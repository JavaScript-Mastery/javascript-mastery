# Day 3 - Arrays and Loops

## Arrays:
- An array is a collection of values, stored in a single variable
- Arrays can store any data type, including other arrays (multi-dimensional arrays)
- Arrays are indexed, starting from 0, and the length of the array can be accessed with the length property
- Arrays can be created using square brackets [] or the Array constructor

**Example:**
```javascript
let myArray = [1, 2, 3, "hello", true]; // creating an array
console.log(myArray.length); // output: 5
```

## Manipulating Arrays:

- Adding and removing elements from an array can be done using methods such as push(), pop(), shift(), unshift(), splice()
- Accessing elements within an array can be done using the index

```JavaScript 
let myArray = [1, 2, 3, 4, 5];
myArray.push(6); // adds 6 to the end of the array
myArray.pop(); // removes the last element (5) from the array
myArray.shift(); // removes the first element (1) from the array
myArray.unshift(0); // adds 0 to the beginning of the array
myArray.splice(2, 1); // removes the element at index 2 (3) from the array
console.log(myArray); // output: [0, 2, 4, 6]
```

## Loops:

- Loops are used to iterate over arrays or perform a set of instructions a specific number of times
- Common types of loops in JavaScript include for, for..in, for..of, while, and do..while
- Nested loops can be used to iterate over multi-dimensional arrays

**Example:**

```JavaScript 
let myArray = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// for..in loop
for (let index in myArray) {
  console.log(myArray[index]);
}

// for..of loop
for (let element of myArray) {
  console.log(element);
}

// while loop
let i = 0;
while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}

// do..while loop
let j = 0;
do {
  console.log(myArray[j]);
  j++;
} while (j < myArray.length);

// nested loop
let multiArray = [[1, 2], [3, 4], [5, 6]];

for (let i = 0; i < multiArray.length; i++) {
  for (let j = 0; j < multiArray[i].length; j++) {
    console.log(multiArray[i][j]);
  }
}
```
***I hope this helps you understand the basics of arrays and loops in JavaScript. 
Practice these concepts to strengthen your understanding and prepare for more advanced concepts in the future.***

### Here are some additional details that will help clarify the concepts of arrays and loops in JavaScript:

## Arrays:

### Creating Arrays:

- Arrays can be created in different ways:
  - Using square brackets:
  ```JavaScript 
  let myArray = [1, 2, 3];
  ```
  - Using the Array constructor:
  ```Javascript 
  let myArray = new Array(1, 2, 3);
  ```
  - Using the Array constructor with a single argument (specifying the length of the array):
  ```JavaScript 
  let myArray = new Array(3);
  ```
- The values in an array do not have to be of the same type.

### Accessing Elements in Arrays:

- Each element in an array has an index, starting from 0.
- You can access the value of an element in an array using the index:
```Javascript 
let myArray = [1, 2, 3];
console.log(myArray[0]); // output: 1
```

### Adding and Removing Elements in Arrays:

- The push() method adds one or more elements to the end of an array:
```JavaScript 
let myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); // output: [1, 2, 3, 4]
```
- The pop() method removes the last element from an array:
```JavaScript 
let myArray = [1, 2, 3];
myArray.pop();
console.log(myArray); // output: [1, 2]
```
- The unshift() method adds one or more elements to the beginning of an array:
```Javascript 
let myArray = [1, 2, 3];
myArray.unshift(0);
console.log(myArray); // output: [0, 1, 2, 3]
```
- The shift() method removes the first element from an array:
```Javascript 
let myArray = [1, 2, 3];
myArray.shift();
console.log(myArray); // output: [2, 3]
```
- The splice() method can be used to add or remove elements from an array:
```Javascript 
let myArray = [1, 2, 3];
myArray.splice(1, 1, 4);
console.log(myArray); // output: [1, 4, 3]
```

## Loops:

### For Loops:
- For loops are used to iterate over a block of code a specified number of times.
- The syntax of a for loop is as follows:
```Javascript 
for (initialization; condition; increment/decrement) {
  // code to be executed
}
```
- **Example:**
```Javascript 
let myArray = [1, 2, 3];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
```

### For..in Loops:

- For..in loops are used to iterate over the properties of an object or the elements of an array.
- The syntax of a for..in loop is as follows:
```Javascript 
for (variable in object) {
  // code to be executed
}
```
- **Example:**
```Javascript 
let myArray = [1, 2, 3];
for (let index in myArray) {
  console.log(myArray[index]);
}
```

### For..of Loops:

- For..of loops are used to iterate over the elements of an iterable object, such as an array or a string.
- The syntax of a for..of loop is as follows:
```Javascript 
for (variable of object) {
  // code to be executed
}
```
- **Example:**
```Javascript 
let myArray = [1, 2, 3];
for (let element of myArray) {
  console.log(element);
}
```

### Nested Loops:

- Nested loops are loops inside other loops.
- They can be used to iterate over multi-dimensional arrays or to perform operations on multiple arrays simultaneously.
- **Example:**
```Javascript 
let myArray = [[1, 2], [3, 4], [5, 6]];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}
```
- This code will output the values of all elements in the multi-dimensional array.

## Multi-dimensional Arrays:

- A multi-dimensional array is an array of arrays.
- It can be used to represent data in a tabular form.
- **Example:**
```JavaScript 
let myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(myArray[1][2]); // output: 6
```
- This code creates a 3x3 array and outputs the value of the element in the second row and third column.

### Working with Arrays:

- Arrays are a special type of object in JavaScript that can store multiple values in a single variable.
- To create an array, you can use square brackets and separate the elements with commas.
- **Example:**
```Javascript 
let myArray = [1, 2, 3];
```
- You can access individual elements in an array using their index, which starts at 0.
- **Example:**
```JavaScript 
let myArray = [1, 2, 3];
console.log(myArray[0]); // output: 1
```
- You can also modify elements in an array by assigning a new value to their index.
- **Example:**
```Javascript 
let myArray = [1, 2, 3];
myArray[1] = 4;
console.log(myArray); // output: [1, 4, 3]
```
- To add elements to the end of an array, you can use the `push()` method.
- **Example:**
```JavaScript 
let myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); // output: [1, 2, 3, 4]
```
- To remove the last element from an array, you can use the `pop()` method.
- **Example:**
```Javascript 
let myArray = [1, 2, 3];
myArray.pop();
console.log(myArray); // output: [1, 2]
```
- To add elements to the beginning of an array, you can use the `unshift()` method.
- **Example:**
```JavaScript 
let myArray = [1, 2, 3];
myArray.unshift(0);
console.log(myArray); // output: [0, 1, 2, 3]
```
- To remove the first element from an array, you can use the `shift()` method.
- **Example:**
```JavaScript 
let myArray = [1, 2, 3];
myArray.shift();
console.log(myArray); // output: [2, 3]
```
### Manipulating Arrays:

- There are many methods you can use to manipulate arrays in JavaScript.
- Some common methods include:
  - `slice()`: returns a new array containing a subset of the original array
  - `concat()`: returns a new array combining two or more arrays
  - `join()`: returns a string containing all the elements of the array joined together
  - `reverse()`: reverses the order of the elements in the array
  - `sort()`: sorts the elements in the array
- **Example:**
```Javascript 
let myArray = [3, 1, 2];
let slicedArray = myArray.slice(0, 2);
console.log(slicedArray); // output: [3, 1]

let newArray = myArray.concat([4, 5]);
console.log(newArray); // output: [3, 1, 2, 4, 5]

let joinedString = myArray.join('-');
console.log(joinedString); // output: "3-1-2"

myArray.reverse();
console.log(myArray); // output: [2, 1, 3]

myArray.sort();
console.log(myArray); // output: [1, 2, 3]
```
### Looping through Arrays:
- You can use loops to iterate over the elements in an array.
- The most common loop used for iterating over arrays is the for loop.
- **Example:**
```JavaScript 
let myArray = [1, 2, 3];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
// output:
// 1
// 2
// 3
```
- Another loop that can be used for iterating over arrays is the for..in loop.
- **Example:**
```Javascript 
let myArray = [1, 2, 3];
for (let i in myArray) {
  console.log(myArray[i]);
}
// output:
// 1
// 2
// 3
```
- The `for..in` loop iterates over the keys of the array, which are the indices of the elements.
- Another loop that can be used for iterating over arrays is the `for..of` loop.
- **Example:**
```Javascript 
let myArray = [1, 2, 3];
for (let value of myArray) {
  console.log(value);
}
// output:
// 1
// 2
// 3
```
- The for..of loop iterates over the values of the array, which are the actual elements.

### Nested Loops and Multi-dimensional Arrays:

- You can use nested loops to iterate over multi-dimensional arrays.
- **Example:**
```JavaScript 
let myArray = [[1, 2], [3, 4]];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}
// output:
// 1
// 2
// 3
// 4
```
- In this example, the outer loop iterates over the arrays in `myArray`, while the inner loop iterates over the elements in each sub-array.

<hr />
<h3 align="center">If my content is useful then give me star 🌟 on this repo.<h3>
   
   
<div align="center">Made with ❤️ by <a href="https://github.com/Ajay-Dhangar" target="_blank">Ajay-Dhangar</a></div>
