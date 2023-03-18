JavaScript supports the concept of classes, which are essentially blueprints for creating objects with certain properties and methods. 
Classes can also be used to implement inheritance, which allows one class to inherit properties and methods from another class.

To create a `class` in JavaScript, you can use the class keyword, followed by the name of the class. For example:

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
```

In this example, we've created a `Person` class with a constructor method that takes `firstName`, `lastName`, and `age` parameters. 
The constructor method is called when a new Person object is created, and it initializes the object with the given properties.

We've also defined a `getFullName()` method on the `Person` class, which returns the person's full name by concatenating their first and last names.

To create a new `Person` object, you can use the `new` keyword and pass in the necessary parameters to the constructor method. 
For example:

```javascript
const person = new Person("John", "Doe", 30);
console.log(person.getFullName()); // "John Doe"
```
