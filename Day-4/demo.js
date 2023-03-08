// create obejects & properties
const person = {
  name: "Ajay Dhangar",
  age: 22,
  about: "Web Developer",
  hobbies: "Coding",
};
// We can access properties with the help of . notation and bracket notation

console.log(person.name);
console.log(person["age"]);

// Now, add new properties with the help of . notation and bracket notation
person.email = "info@gmail.com";

person.phone_no = 1234567890;
console.log(person.email);
console.log(person.phone_no);
// Delete properties
// delete person.email;
// console.log(person.email);
console.log("--------------------");
// update properties
person.age = 20;
// if you print all with hte help of looping
for (let key in person) {
  console.log(key + ":" + person[key]);
}
