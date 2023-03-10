// initilize and declare array
let myArray = [1, 2, 3];

// display array

// console.log("myArray[0]: " + myArray[0]); // 1
// console.log("myArray[1]: " + myArray[1]); // 2
// console.log("myArray[2]: " + myArray[2]); // 3
// console.log("Size of Array: " + myArray.length);

//looping
for (let i = 0; i < myArray.length; i++) {
  console.log("index[" + i + "] : " + myArray[i]);
}

// add new element in array
myArray.push(5);

console.log(myArray);

// remove element to array
myArray.pop();
console.log(myArray);

// add new element in first position
myArray.unshift(6);
console.log(myArray);

// remove first element of array
myArray.shift();
console.log(myArray);

// add or remove elements from an array
myArray.splice(1, 1, 1);
// splice(select index, remove numbere of index after select index,
// add new elementat selected element)
console.log(myArray);
console.log(myArray.indexOf(1));
console.log();
