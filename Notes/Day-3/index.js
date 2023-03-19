//
// Day-3 Arrays and Loops in  JavaScript

// Arrays:
//========================
// 1-D array
//========================
// let MyArray = [1, 2, "name", 2.0, "demo"];
// console.log(MyArray); // output: [1, 2, "name", 2.0, "demo"]

// ====== manipulate Arry ============

//let MyArray = [1, 2, "name", 2.0, "demo"];

// MyArray.push(6); // increase index and add new value 6

// console.log(MyArray); // output: [1, 2, "name", 2.0, "demo", 6]

// MyArray.pop(); // Decrease index and remove last value 6

// console.log(MyArray); // output: [1, 2, "name", 2.0, "demo"]

// MyArray.shift(); // remove index 1 or myArray[0]
// console.log(MyArray); // Output: [ 2, 'name', 2, 'demo' ]
// MyArray.unshift(0);
// console.log(MyArray); // Output: [ 0, 2, 'name', 2, 'demo' ]
// MyArray.splice(2, 1);
// console.log(MyArray); //Output:  [ 0, 2, 2, 'demo' ]
//=================================
// ====== loops =========
//=================================

let myArray = [1, 2, 3, 4, 5];

// for loop
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// for..in loop
// for (let index in myArray) {
//   console.log(myArray[index]);
// }

// for..of loop
// for (let element of myArray) {
//   console.log(element);
// }

// while loop
// let i = 0;
// while (i < myArray.length) {
//   console.log(myArray[i]);
//   i++;
// }

// do..while loop
// let j = 0;
// do {
//   console.log(myArray[j]);
//   j++;
// } while (j < myArray.length);

// nested loop
// let multiArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (let i = 0; i < multiArray.length; i++) {
//   for (let j = 0; j < multiArray[i].length; j++) {
//     console.log("multiArray [" + i + j + "] = " + multiArray[i][j]);
//   }
// }

//==================     ===================
