// let num1 = parseInt(prompt("Enter the first number:"));
// let num2 = parseInt(prompt("Enter the second number:"));

// let sum = num1 + num2;

// console.log(`The sum of ${num1} and ${num2} is ${sum}.`);

// initilize and declare array
//let myArray = [1, 2, 3];

// display array

// console.log("myArray[0]: " + myArray[0]); // 1
// console.log("myArray[1]: " + myArray[1]); // 2
// console.log("myArray[2]: " + myArray[2]); // 3
// console.log("Size of Array: " + myArray.length);

//looping
// for (let i = 0; i < myArray.length; i++) {
//   console.log("index[" + i + "] : " + myArray[i]);
// }

// ===== push =========
// add new element in array
// myArray.push(5);

// console.log(myArray);

// ========== pop ==========
// remove element to array
// myArray.pop();
// console.log(myArray);

// ========== unshift ============
// add new element in first position
// myArray.unshift(6);
// console.log(myArray);

// ========= shift ==========
// remove first element of array
// myArray.shift();
// console.log(myArray);

// ======== splice ==========
// add or remove elements from an array
// myArray.splice(1, 1, 1, 6, 7, 6, 9);
//splice(select index, remove numbere of index after select index,
//add new elementat selected element)
// console.log(myArray);
// console.log(myArray.indexOf(1));

// ======== indexOf() ==============

// let array = ["a", "b", "c", "d", "e", "f", "g"];
// let index = array.indexOf("e");
// console.log(index); // 4
// console.log(array.indexOf("a")); // 0
// console.log(array.indexOf("c")); // 2
// console.log(array.indexOf("d")); // 3
// console.log(array.indexOf("f")); // 5

// ======== lastindexOf() ==============

// let array = ["a", "b", "c", "d", "e", "f", "g"];
// let index = array.lastIndexOf();
// console.log(index); // -1
// console.log(array.lastIndexOf("h")); // -1
// console.log(array.lastIndexOf("e")); // 4
// console.log(array.lastIndexOf("b")); // 1
// console.log(array.lastIndexOf("c")); // 2

// ======== slice() ==============

// let array = ["a", "b", "c", "d", "e", "f", "g"];
// console.log("array: " + array);
// console.log("length of array: " + array.length);
// let arr2 = array.slice(3, 5);
// console.log("arr2: " + arr2); // [d, e]

// console.log("length of arr2: " + arr2.length);

// ======== slice() ==============

// let array = ["a", "b", "c", "d", "e", "f", "g"];
// console.log("array: " + array);
// console.log("length of array: " + array.length);
// let arr2 = array.slice(3, 5);
// console.log("arr2: " + arr2); // [d, e]

// console.log("length of arr2: " + arr2.length);

// =========== map ==========

// const Ans = myArray.map((x) => x * 2);
// console.log(Ans);  // [2, 4, 6]
// let sum,
//   sub = 0;
// const Ans = myArray.reduce(function (sum, x) {
//   return sum + x;
// });
// console.log("sum: " + Ans); // [2, 4, 6]
// const Ans2 = myArray.reduce(function (sub, x) {
//   return sub - x;
// });
// console.log("sub: " + Ans2); // [2, 4, 6]

// ========= some() ===========
let myArray = [1, 2, 3, 4, 5];
const Ans2 = myArray.some(function (sub, x) {
  return x % 2 === 0;
});
console.log(Ans2); //true
// ========= every() ==========
