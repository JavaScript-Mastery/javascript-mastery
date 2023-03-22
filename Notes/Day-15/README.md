# Day-15 Design Patterns

In JavaScript, there are many design patterns you can use. Here are a few commonly used ones:

### 1. Singleton Pattern

The Singleton pattern is used to restrict the instantiation of a class to a single object. 
This can be useful when you want to ensure that only one instance of a class exists in your application. 

Here's an example:

```JavaScript 
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }
}
```

In this example, the `constructor` function checks if an instance of the `Singleton` class already exists. 
If an instance does not exist, it creates a new one and sets the `instance` property to it. 
If an instance does exist, it simply returns the existing instance.

### 2. Factory Pattern

```JavaScript 
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `${this.make} ${this.model}`;
  }
}

function carFactory(make, model) {
  switch (make) {
    case 'Honda':
      return new Car(make, model);
    case 'Toyota':
      return new Car(make, model);
    default:
      throw new Error(`Invalid make: ${make}`);
  }
}

const honda = carFactory('Honda', 'Civic');
console.log(honda.getInfo()); // output: "Honda Civic"

const toyota = carFactory('Toyota', 'Corolla');
console.log(toyota.getInfo()); // output: "Toyota Corolla"
```

In this example, we define a `Car` class that has a `make` and `model` property, as well as a `getInfo` method that returns a string 
representation of the car. We also define a `carFactory` function that takes a `make` and `model` parameter and returns a new instance 
of the `Car` class based on the `make` parameter.


### 3. Observer Pattern

The Observer pattern is used to notify multiple objects when an event occurs. 
In this pattern, a subject (or publisher) object maintains a list of observer (or subscriber) objects and notifies them when an 
event occurs. 

Here's an example:

```JavaScript 
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notify(event) {
    this.observers.forEach(observer => observer.update(event));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(event) {
    console.log(`${this.name} received event: ${event}`);
  }
}

const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Event 1'); // output: "Observer 1 received event: Event 1" and "Observer 2 received event: Event 1"

subject.unsubscribe(observer2);

subject.notify('Event 2'); // output: "Observer 1 received event: Event 2"
```

In this example, we define a `Subject` class that maintains a list of observer objects and has methods to subscribe, unsubscribe, 
and notify observers. We also define an `Observer` class that has a `name` property and an `update` method that logs the received event.

We create a `subject` object and two `observer` objects. 
We subscribe both observers to the `subject` object and then notify them of an event. 
We then unsubscribe one of the observers and notify the remaining observer of another event.

### 4. Decorator Pattern

The Decorator pattern is used to add behavior to an object dynamically without affecting other objects of the same class. 
This can be useful when you want to add functionality to an object at runtime, or when you want to add behavior to an object 
without changing its class definition. 

Here's an example:

```JavaScript 
class Coffee {
  getCost() {
    return 1;
  }

  getDescription() {
    return 'Coffee';
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 0.5;
  }

  getDescription() {
    return `${this.coffee.getDescription()} with milk`;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 0.25;
  }

  getDescription() {
    return `${this.coffee.getDescription()} with sugar`;
  }
}

const coffee = new Coffee();
console.log(coffee.getCost()); // output: 1
console.log(coffee.getDescription()); // output: "Coffee"

const coffeeWithMilk = new MilkDecorator(coffee);
console.log(coffeeWithMilk.getCost()); // output: 1.5
console.log(coffeeWithMilk.getDescription()); // output: "Coffee with milk"

const coffeeWithSugar = new SugarDecorator(coffee);
console.log(coffeeWithSugar.getCost()); // output: 1.25
console.log(coffeeWithSugar.getDescription()); // output: "Coffee with sugar"
```

In this example, we define a `Coffee` class that has methods to get the cost and description of a coffee. 
We then define two decorator classes, `MilkDecorator` and `SugarDecorator`, that add behavior to a `Coffee` object by wrapping it.

We create a `coffee` object and then create two decorated versions of it, `coffeeWithMilk` and `coffeeWithSugar`. 
The decorated objects have the same interface as the `Coffee` object, but their behavior has been modified by the decorators.
