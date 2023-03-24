# Day-26	TypeScript Fundamentals

## What is TypeScript?
TypeScript is a statically-typed superset of JavaScript that compiles to plain JavaScript. 
It was developed by Microsoft and was designed to make it easier to build large-scale, complex applications. 
It adds optional static type-checking, classes, interfaces, enums, and other features to JavaScript.

## Getting started with TypeScript
To get started with TypeScript, you first need to install it. You can do this using npm:

```
npm install -g typescript
```

Once you have TypeScript installed, you can create a new TypeScript file with the `.ts` extension. 

For example:


```ts
// hello.ts
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet("World");
```

In this example, we define a `greet` function that takes a `name` parameter of type `string` and logs a greeting message to the console. 
We then call the greet function with the string "World".

To compile this TypeScript file to JavaScript, you can use the `tsc` command:

```bash
tsc hello.ts
```

This will generate a new JavaScript file with the same name as your TypeScript file, but with the `.js` extension:

```js
// hello.js
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("World");
```

You can then run this JavaScript file using `Node.js`:

```bash
node hello.js
```

This will output the greeting message to the console.

## Basic types in TypeScript

TypeScript includes several basic types, such as `string`, `number`, `boolean`, `null`, `undefined`, and `void`.

### Strings

Strings are a sequence of characters enclosed in single or double quotes. 
You can concatenate strings using the + operator, or by using template literals enclosed in backticks (`).

```ts
let firstName: string = "John";
let lastName: string = "Doe";

let fullName: string = firstName + " " + lastName;
let greeting: string = `Hello, ${fullName}!`;

console.log(greeting); // Output: Hello, John Doe!
```

### Numbers

Numbers are numeric values, either integers or floating-point numbers.

```ts
let age: number = 30;
let height: number = 1.75;

console.log(`Age: ${age}, Height: ${height}m`); // Output: Age: 30, Height: 1.75m
```

### Booleans

Booleans are either `true` or `false`.

```ts
let isStudent: boolean = true;

if (isStudent) {
  console.log("You are a student.");
} else {
  console.log("You are not a student.");
}
```

### Null and Undefined

`null` and `undefined` are used to represent the absence of a value. 
`null` is a value that indicates the intentional absence of any object value, 
while `undefined` is a value that indicates the absence of any value.

```ts
let age: number = null;
let name: string = undefined;

console.log(`Age: ${age}, Name: ${name}`); // Output: Age: null, Name: undefined
```

### Void

void is used to indicate that a function doesn't return a value.

```ts
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, World!"); // Output: Hello, World!
```

### Variables and Constants

You can declare variables and constants using the `let` and `const` keywords in TypeScript. 
The `let` keyword is used to declare mutable variables, while the `const` keyword is used to declare immutable variables.

```ts
let age: number = 30;
const PI: number = 3.14;

age = age + 1;
// PI = 3.14159; // This will result in an error, since PI is a constant

console.log(`Age: ${age}, PI: ${PI}`); // Output: Age: 31, PI: 3.14
```

### Functions

Functions in TypeScript are similar to functions in JavaScript, but with added support for static typing.

```ts
function addNumbers(x: number, y: number): number {
  return x + y;
}

console.log(addNumbers(5, 10)); // Output: 15
```

In this example, we define a function addNumbers that takes two parameters of type number and returns their sum.

### Classes and Interfaces
TypeScript includes support for classes and interfaces, which can be used to define custom types.

### Classes
Classes are used to define objects that have properties and methods.

```ts
class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
  }
}

let person = new Person("John", "Doe", 30);
person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.
```

In this example, we define a `Person` class with properties `firstName`, `lastName`, and `age`, as well as a `greet` 
method that logs a greeting message to the console.

### Interfaces

Interfaces are used to define the shape of an object, including its properties and methods.

```ts
interface Animal {
  name: string;
  age: number;
  speak(): void;
}

class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak(): void {
    console.log("Woof!");
  }
}

let dog = new Dog("Fido", 5);
console.log(`Name: ${dog.name}, Age: ${dog.age}`);
dog.speak(); // Output: Woof!
```

In this example, we define an `Animal` interface with properties `name`, `age`, and a `speak` method. 
We then define a `Dog` class that implements the `Animal` interface.

### Generics
Generics allow you to create reusable code that works with a variety of types. 
They are used to create type-safe functions, classes, and interfaces.

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(42)); // Output: 42
console.log(identity<string>("Hello, World!")); // Output: Hello, World!
```

In this example, we define a identity function that takes a generic type `T` and returns a value of type `T`.

## Additional Concepts
Here are some additional concepts that you may find helpful in your TypeScript journey:

### Type Aliases
Type aliases allow you to create a new name for a type, making it easier to read and understand your code.

```ts
type ID = string;

function getUserById(id: ID): { id: ID, name: string } {
  // ...
}
```

In this example, we create a type alias `ID` for the `string` type, making it easier to understand what the `id` parameter is used for.

### Union Types
Union types allow you to define a type that can be one of several different types.

```ts
function formatInput(input: string | number): string {
  return `The input is ${input.toString()}.`;
}

console.log(formatInput("Hello")); // Output: The input is Hello.
console.log(formatInput(42)); // Output: The input is 42.
```

In this example, we define a `formatInput` function that takes a parameter of type `string` or `number`, and returns a formatted string. 
This allows the function to handle different types of input.

## Type Assertions
Type assertions allow you to tell the compiler that you know more about a value than it does.

```ts
let someValue: any = "Hello, World!";
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 13
```

In this example, we use a type assertion to tell the compiler that `someValue` is a `string`, even though it is declared as `any`. 
This allows us to access the `length` property of the string.

### Type Inference

Type inference is a feature of TypeScript that allows the compiler to automatically determine the type of a variable based on its value.

```ts
let x = 42;
let y = "Hello, World!";

console.log(typeof x); // Output: number
console.log(typeof y); // Output: string
```

In this example, we declare two variables `x` and `y` without specifying their types. 
The compiler automatically infers that `x` is a `number` and `y` is a `string`.

### Enums
Enums allow you to define a set of named constants.

```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3
}

let c: Color = Color.Green;
console.log(c); // Output: 2
```

In this example, we define a `Color` enum with three named constants. 
We then declare a variable `c` of type `Color` and assign it the value `Color.Green`. 
The value of `c` is `2`, since the enum maps `Green` to the value `2`.

### Resources
Here are some resources to help you continue your TypeScript learning:

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript for React Developers](https://egghead.io/)
- [TypeScript Course by Mosh Hamedani](https://www.udemy.com/course/typescript/)
- [TypeScript Course by Academind](https://www.udemy.com/course/understanding-typescript/)
- [TypeScript Fundamentals Course by Pluralsight](https://www.pluralsight.com/courses/typescript-fundamentals)
- [TypeScript Crash Course by Traversy Media](https://www.youtube.com/watch?v=rAy_3SIqT-E)
- [TypeScript Tutorial for Beginners by FreeCodeCamp](https://www.freecodecamp.org/news/learn-typescript-in-5-minutes-13eda868daeb/)

## Conclusion
In this tutorial, we covered the basics of TypeScript and some of its most important features. 
We learned about type annotations, interfaces, classes, and modules, and we saw how 
TypeScript can help us catch errors early in the development process. 
We also covered some additional concepts like type aliases, union types, type assertions, type inference, and enums, 
and we provided some resources to help you continue your TypeScript learning.

Remember, TypeScript is a powerful tool that can help you write better code, catch errors early, and increase the maintainability 
of your codebase. By taking the time to learn TypeScript, you'll be well on your way to becoming a more efficient and effective developer.
