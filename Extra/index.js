//
// ======== All * pattern =======
// ==== pattern: 1 =========
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
//==========================
// let string = "";
// for (let row = 1; row <= 5; row++) {
//   for (let col = 1; col <= 5; col++) {
//     string += "*" + " ";
//   }
//   string += "\n";
// }
// console.log(string);
// ============================

// ==== pattern: 2 =========
//
// *
// **
// ***
// ****
// *****
//===========

// let string = "";
// for (let row = 1; row <= 5; row++) {
//   for (let col = row; col >= 1; col--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
//
//=================
// ==== pattern: 3 =========
// =============
// *****
// ****
// ***
// **
// *
//======

// let string = "";
// for (let row = 1; row <= 5; row++) {
//   for (let col = 5; col >= row; col--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
//============
// ==== pattern: 4 =========
//===========
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
//============

// let string = "";
// for (let row = 1; row <= 5; row++) {
//   for (let col = 1; col <= 5; col++) {
//     string += col + " ";
//   }
//   string += "\n";
// }
// console.log(string);
//============
// ==== pattern: 5 =========
//===========
// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
// let string = "";
// for (let row = 1; row <= 5; row++) {
//   for (let col = row; col >= 1; col--) {
//     string += col + " ";
//   }
//   string += "\n";
// }
// console.log(string);
//============
// ==== pattern: 6 =========
//===========
// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5
// let string = "";
// for (let row = 1; row <= 5; row++) {
//   for (let col = 5; col >= row; col--) {
//     string += col + " ";
//   }
//   string += "\n";
// }
// console.log(string);
//============
// ==== pattern: 7 =========
//===========
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
//===========
// let string = "";
// for (let row = 1; row <= 5; row++) {
//   for (let col = 1; col <= row; col++) {
//     string += col + " ";
//   }
//   string += "\n";
// }
// console.log(string);
//============
// ==== pattern: 8 =========
//===========
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
//===========
// let string = "";
// for (let row = 5; row >= 1; row--) {
//   for (let col = row; col >= 1; col--) {
//     string += col + " ";
//   }
//   string += "\n";
// }
// console.log(string);
//============
// ==== pattern: 10 =========
//===========
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
//===========
// let string = "";
// for (let row = 1; row <= 5; row++) {
//   for (let col = row; col >= 1; col--) {
//     string += row + " ";
//   }
//   string += "\n";
// }
// console.log(string);
//============
// ==== pattern: 10 =========
//===========
// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5
//===========
// let string = "";
// for (let row = 1; row <= 5; row++) {
//   for (let col = 1; col <= 5; col++) {
//     string += row + " ";
//   }
//   string += "\n";
// }
// console.log(string);
