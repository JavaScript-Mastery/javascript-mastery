// =======================================

//    >========>  Js Mock  <=========<

// =========================================


// Que.1 Difference between “ == “ and “ === “ operators.

console.log(4=='4'); // true
console.log(4==='4'); // false


// Que.2 What are the differences between var, let and const?

// ===================
//     var 
// ==================
var a = 5;
console.log('var a =', a); // 5
var a = 6;
console.log('var a =', a); // 6
a=8;
console.log('a =',a); // 8

// ==================
//    let
// ==================

let b = 2;
console.log('let b =', b); // 2
// let b = 3;
// console.log('let b =', b); // Cannot redeclare block-scoped variable 'b'.
b = 5;
console.log('b =', b); // 5

// ==================
//    const
// ==================

const c = 2;
console.log('const c = ', c); // 2
// const c = 3;
// console.log(c); // Cannot redeclare block-scoped variable 'b'.
// c = 5;
// console.log(c); // Uncaught TypeError: Assignment to constant variable.


// Que.3 What is hoisting?

console.log('hoisting:', d); // undefined
var d = 5;


// Que.4 What is a Temporal Dead Zone?

// console.log('Temporal Dead Zone:', e); // Uncaught ReferenceError: Cannot access 'e' before initialization
// let e = 5;  // in the case let / const (for block-scoped variable)

// Que.5 What is meant by first class functions

let f = 5;

function fun1(f) {
    return f;
}
console.log('first class functions: fun1(f)', fun1(f));

// Que.6 What are pure functions?

function sum (a, b){
    return a+b;
}

console.log('Sum =', sum(4, 5), '(use of pure functions)');

// Que.7 What is execution context

// Que.8 What is an event loop and call stack

// Que.9 What is creation phase and execution phase?

// Que.10 What is the spread operator?

let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1, 5, 6];
console.log(arr2, 'use of spread operator');


function rest(...arr3) {
    console.log(arr3, 'use of rest operator');
}
rest(1, 2, 3, 4);

// Que.11 What is the use of setTimeout

setTimeout(()=>{
    console.log("My name is Ajay", "(use of setTimeout)");
}, 2000)

// Que.12 What are callbacks?

function firstName(){
    return "Ajay";
}


function f1Name(first) {
    console.log(first(), '(Use of callbacks)');
}
f1Name(firstName)

// Que.13 What is callback hell


function lastName() {
    return "Dhangar"
}

function fullName(first, last) {
    console.log("My name is:", first(), last(), '(use of callback hell)');
}

fullName(firstName, lastName)

// Que.14 Difference between undefined vs not defined vs NaN

let g; 
console.log(g); // undefined

// console.log(h); // Uncaught ReferenceError: g is not defined

console.log('Ajay' * 'Dhangar'); // NaN

// Que.15 What are promises and why do we need them?

const myPromise = () =>{
    return new Promise((res, rej)=>{
        let a = 5;
        if(a>4){
            if(a<6){
                res("a is equal to 5");
            }
            else{
                rej(" a is largest to 5");
            }
        }
        else{
            rej("a is smallest to 5")
        }
    })
}
myPromise().then(ans=>console.log(ans, "(Use of promise)")).catch(err=>console.log(err))

// Que.16 What is promise chaining

const userId = 123;

function fetchUsers(userId){
    return new Promise((res, rej)=>{
        const user = {
            id: 1, user: userId, name: "Ajay"
        }
        res(user);
    })
}

function fetchPost(userId){
    return new Promise((res, rej)=>{
        const posts = [{
            id: 1, user: userId, post: 'title-1', name: "Ajay"
        }, 
        {
            id: 2, post: 'title-2', name: "Jay"
        }    
    ]
        res(posts);
    })
}

fetchUsers(userId).then(user=>{
    
    console.log(user, "(Use of promise chaining)");
    return fetchPost(userId)
}).then(post=>{
    console.log(post)
}).catch(err=>console.log(err))

// Que.17 What is the DOM?


// Que.18 What are closures? Give an example of closure

function outer(i) {
    function inner(j) {
        console.log("(3)(4) =", i*j, "(use of closures)");
    }
    return inner;
}
outer(3)(4)

// Que.19 How many operators do we have in JS ?


// Que.20 What are objects in javascript?

let obj = {
    name:"Ajay", 
    age: 22
}
console.log(`my name is ${obj.name} and age is ${obj.age}. (use objects in javascript)`);

// Que.21 What are function constructors?

function person(name, age) {
    this.name = name;
    this.age = age;
}

const emp1 = new person("Shivay", 25);
const emp2 = new person("Rohan", 21);

console.log(`Employee name is ${emp1.name} and age is ${emp1.age}. (use function constructors in javascript)`);
console.log(`Employee name is ${emp2.name} and age is ${emp2.age}. (use function constructors in javascript)`);

// Que. Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()

const obj1 = {
    empName: "Ajay Dhangar",
    age: 22
}

const per1 = {
    info: function (jobTitle) {
        console.log(`Name is ${this.empName}, age is ${this.age}, and doing work ${jobTitle}`, `(use of call())`);
    }
}
const per2 = {
    info: function (jobTitle) {
        console.log(`Name is ${this.empName}, age is ${this.age}, and doing work ${jobTitle}`, `(use of apply())`);
    }
}
const per3 = {
    info: function (jobTitle) {
        console.log(`Name is ${this.empName}, age is ${this.age}, and doing work ${jobTitle}`, `(use of bind())`);
    }
}

per1.info.call(obj1, 'SDE')
per2.info.apply(obj1, ['SDE'])
per3.info.bind(obj1, 'SDE')()


// Que. What is the purpose of async/await keywords?

function func2(m){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("use of async/await", m);
            res();
        }, m)
    })
}

async function display(){
    await func2(4000);
    await func2(3000);
    await func2(1000);
    await func2(2000);
}
display()


// Que. Explain prototypes

function man(name, age, job) {
    this.name = name;
    this.age=age;
    this.job = job
}

man.prototype.info=function(){
    console.log(`My is ${this.name} and ${this.age} and my job title is ${this.job}.  (use of prototypes)`);
}

const Employee = new man("Shivay", 22, "SDE")

Employee.info()

// Que. What is prototype chain

// Constructor function for creating a Vehicle
function Vehicle(make) {
    this.make = make;
  }
  
  // Adding a method to the Vehicle prototype
  Vehicle.prototype.start = function() {
    console.log(`Starting the ${this.make} vehicle.`);
  };
  
  // Creating a Car constructor that inherits from Vehicle
  function Car(make, model) {
    Vehicle.call(this, make);
    this.model = model;
  }
  
  // Inheriting the prototype of Vehicle
  Car.prototype = Object.create(Vehicle.prototype);
  
  // Adding a method specific to Car
  Car.prototype.drive = function() {
    console.log(`Driving the ${this.make} ${this.model}.`);
  };
  
  // Creating instances
  const car1 = new Car('Toyota', 'Camry');
  
  // Accessing methods
  car1.start(); // Output: Starting the Toyota vehicle.
  car1.drive(); // Output: Driving the Toyota Camry.
  
// Que. Give an example of inheritance using function constructor


// Que. Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

const btn = document.getElementById('btn');
const heading = document.getElementById('heading');

btn.addEventListener('click', ()=>{
    const newhead = document.createElement('h1');
    newhead.textContent = "MERN stack";
    heading.prepend(newhead)
})

// Que. Write code to get 1st H1 element from a webpage using DOM

// Assuming you have a reference to the document object
const firstH1 = document.querySelector('h1');

if (firstH1) {
    console.log(firstH1.textContent);
} else {
    console.log('No <h1> element found on the page.');
}

// Que. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function updateTimer() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('timer').textContent = currentTime;
}
setInterval(updateTimer, 1000);

updateTimer();

// Que. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

// Get references to the elements
const contentElement = document.getElementById('content');
const replaceButton = document.getElementById('replaceButton');

// Add a click event listener to the button
replaceButton.addEventListener('click', function() {
    // Change the content of the paragraph
    contentElement.textContent = 'Welcome to Elevation academy';
});

// Que. Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

function hideText() {
    const helloText = document.getElementById("helloText");
    helloText.style.display = "none";
}


// ======================================================


const orderList = document.getElementsByClassName('data')[0]; 

fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => render(data))
  .catch(err => console.log(err));

function render(data) {
  data.map(item => {
    const myList = document.createElement('li');
    myList.textContent = item.login;
    orderList.appendChild(myList);
  });
}

