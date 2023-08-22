
// =========== Que.1 ==========
// console.log(4 == "4"); // == : It is compare to only value between (two operands).
// console.log(4 === "4"); // === : It is compare to value and data type between (two operands).

// =========== Que.2 ==========

// Spread operator: In the Js Spread operator is denoted with the help of three dots (...). It is used of copy array eleements for other arr.

// for example

// let arr1 = [1, 2, 3, 4];
// let arr2 = [...arr1]; // [1, 2, 3, 4]
// console.log(arr2);

//====== OR ==========

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7]; 
// let mergeTwoArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6, 7]
// console.log(mergeTwoArray);


// =========== Que.3 ==========

// var is a globle scope. But let and const is block scope.

// var: we can be redeclare and re-assign var variable.

// example
// var a=10;
// console.log(a);
// var a=20;
// console.log(a);

// let : we can be only re-asign but not re-declare to let variable.

// example
// let a=10;
// console.log(a);
//let a=20;
// a=20;
// console.log(a);

// const : we can't re-declare and can't reasign to const variable.
// example
// const a=10;
// console.log(a);
// // const a=20; // SyntaxError: Identifier 'a' has already been declared
// // a=20; // TypeError: Assignment to constent variable.
// console.log(a);

// =========== Que.4 / Que.5 ==========

// execution context: When we run our code on brouser and we also knbow every browser have JavaScript engin
// then this engine scan our Js file and create one envienment that is called execution context.
// this is two pheses

// 1st is creation phase: when our execution context is created for our Js file Or Codes that is know as creation phese.
// 2nd is code execution phese: after a creation phese then we can move on next phese that is called code execution phese. In this phese our code is executed.

// =========== Que.6 ==========

// first class functions: A first class function is a function.In this function we can do pass variable and a function as
// an argument in another function that is known as first class function.

// for example:

// // create a function 
// function sum(a, b){
//     console.log(a+b);
// }
// // create another function
// function addition(m, n, add) {
//     add(m, n);
// }
// // call function
// addition(3, 5, sum); // 8

// ========== Que.7 =============

// closure: closure is a combination of functions or we can use nexted function or for example two function one is outter function
// and second is inner function and we can be define any variable in lexical scope of inner function and we can do to excess in inner function. And most importent we can use closure for create a private variable, and private method that's mean it is not excessible in outside of closure.
//
// How to create a closure 
// first we can do to create one outter function and declare a variable and assign a value in declared variable 
// after we can do to create one more function innner function in the outter function and this inner function return in 
// outter function outside of inner function and we can call outter function and assign this in other variable and 
// use this variable as a function.

// for Example:

// function outterFunction(){
//     var name="Ajay Dhangar";
//     function innerFunction(){
//         console.log("My name is", name);
//     }

//     return innerFunction; // only innerFunction not innerFunction();
// }
// // const result = outterFunction();
// // result(); // My name is Ajay Dhangar

// // ========= OR other way ==========
// outterFunction()(); // My name is Ajay Dhangar

// =========== Que.8 ==========
// call():
//apply():
//bind():

// =========== Que.9 ==========

// objects: 
// const obj = {
//     name:"Ajay",
//     age:22
// }
// console.log(obj.name);


// function person(name, age){
//     this.name= name;
//     this.age= age;

// }
// Accessing window object properties
// console.log(window.innerWidth); // returns the inner width of the browser window
// console.log(window.location.href); // returns the URL of the current page

// // Accessing document object properties
// console.log(document.title); // returns the title of the current HTML document
// console.log(document.getElementById("myElement")); // returns the HTML element with ID "myElement"
// // const employee = new person("Ajay", 22);
// // console.log(employee.name);

function func() {
   const heading = document.creareElement('h1')
   const title = createTextnode
}