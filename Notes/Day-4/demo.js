// create obejects & properties
// const person = {
//   name: "Ajay Dhangar",
//   age: 22,
//   about: "Web Developer",
//   hobbies: "Coding",
// };
// We can access properties with the help of . notation and bracket notation

// console.log(person.name);
// console.log(person["age"]);

// Now, add new properties with the help of . notation and bracket notation
// person.email = "info@gmail.com";

// person.phone_no = 1234567890;
// console.log(person.email);
// console.log(person.phone_no);
// Delete properties
// delete person.email;
// console.log(person.email);
// console.log("--------------------");
// update properties
// person.age = 20;
// if you print all with hte help of looping
// for (let key in person) {
//   console.log(key + ":" + person[key]);
// }

//============================

// let object1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// let object2 = {
//   a: 5,
//   d: 6,
//   e: 7,
// };
// let object3 = {
//   f: 8,
//   g: 9,
//   h: 10,
// };
// console.log(object1); // {a: 1, b: 2, c: 3}
// console.log(object1.a); // 1
// console.log(object2.a); // 5

//============================
// this (keyword)
// =================

// let newObject = {
//   firstname: "Ajay",
//   lastname: "Dhangar",
//   Age: 22,
//   print: function () {
//     console.log(
//       "Name: " +
//         this.firstname +
//         "-" +
//         this.lastname +
//         " | " +
//         "age: " +
//         this.Age
//     );
//   },
// };
// newObject.print(); //Name: Ajay-Dhangar | age: 22

