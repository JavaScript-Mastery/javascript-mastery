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

In this example, we've created a new `Person` object called `person` with the first name "John", last name "Doe", and age 30. 
We then call the `getFullName()` method on the person object and log the result to the console.

You can also use inheritance to create a subclass that inherits properties and methods from a parent class. 
To do this, you can use the `extends` keyword followed by the name of the `parent` class. 
For example:

```JavaScript 
class Employee extends Person {
  constructor(firstName, lastName, age, jobTitle) {
    super(firstName, lastName, age);
    this.jobTitle = jobTitle;
  }

  getJobTitle() {
    return this.jobTitle;
  }
}
```

In this example, we've created an `Employee` class that extends the `Person` class. 
The `Employee` class has a constructor method that takes `firstName`, `lastName`, `age`, and `jobTitle` parameters. 
We use the `super()` method to call the constructor of the parent class and set the `firstName`, `lastName`, and `age` properties. 
We then initialize the `jobTitle` property with the given value.

We've also defined a `getJobTitle()` method on the `Employee` class, which returns the person's job title.

To create a new `Employee` object, you can use the `new` keyword and pass in the necessary parameters to the constructor method. 
For example:

```javascript
const employee = new Employee("Jane", "Doe", 25, "Developer");
console.log(employee.getFullName()); // "Jane Doe"
console.log(employee.getJobTitle()); // "Developer"
```

In this example, we've created a new `Employee` object called `employee` with the first name "Jane", last name "Doe", age 25, and job title "Developer". We then call the `getFullName()` and `getJobTitle()` methods on the `employee` object and log the results to the console.
