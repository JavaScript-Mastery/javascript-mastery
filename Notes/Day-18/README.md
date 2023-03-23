
# Day-18 Frameworks and Libraries

JavaScript is a very popular programming language used for building interactive and dynamic web pages. 
It has a rich set of built-in functions and methods, but it can be challenging to build complex applications with just the core language 
features. That's where frameworks and libraries come in.

Frameworks and libraries are pre-written code that you can use to speed up your development process, improve code quality, and reduce 
the likelihood of errors. In this lesson, we'll discuss the difference between frameworks and libraries and explore some popular 
JavaScript frameworks and libraries.

## Frameworks vs. Libraries

Frameworks and libraries are similar in that they both provide pre-written code to help you develop your application. 
However, there is an important difference between the two.

A framework provides a complete structure for building an application, including code for common tasks like routing, data management, 
and user interface design. 
Frameworks usually have a well-defined architecture and a set of rules that developers must follow when writing their code.

A library, on the other hand, provides a set of tools or utilities for accomplishing specific tasks, like manipulating the DOM or 
making HTTP requests. Libraries are usually more flexible than frameworks and allow developers to choose which parts of the library 
to use and how to use them.

## Popular JavaScript Frameworks

### React

React is a popular JavaScript library for building user interfaces. 
It was created by Facebook and is widely used in web development. 
React uses a declarative programming style, where developers describe how their UI should look and behave, and React takes care 
of updating the DOM as necessary. React is also known for its performance and scalability.

Here's an example of using React to create a simple component:

```jsx
import React from 'react';

function MyComponent(props) {
  return <div>Hello, {props.name}!</div>;
}

export default MyComponent;
```

### Angular
Angular is a JavaScript framework for building web applications. 
It was created by Google and provides a complete set of tools for building complex applications. 
Angular uses a component-based architecture, where developers define reusable UI components that can be composed to create complex 
user interfaces. Angular also provides tools for managing data, handling user input, and handling HTTP requests.

Here's an example of using Angular to create a simple component:

```js 
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: '<div>Hello, {{name}}!</div>',
})
export class MyComponent {
  name = 'World';
}
```

### Vue
Vue is a JavaScript framework for building user interfaces. 
It was created by Evan You and is known for its simplicity and ease of use. 
Vue provides a reactive data model, where changes to data automatically update the UI. 
Vue also provides tools for handling user input, creating reusable components, and managing state.

Here's an example of using Vue to create a simple component:

```html
<template>
  <div>Hello, {{name}}!</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'World',
    };
  },
};
</script>
```

## Popular JavaScript Libraries

### jQuery

jQuery is a JavaScript library that simplifies HTML document traversal and manipulation, event handling, and AJAX interactions. 
It provides a set of methods for selecting and manipulating DOM elements, and it abstracts away browser inconsistencies and quirks.

Here's an example of using jQuery to add a click event listener to a button:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </head>
  <body>
    <button id="my-button">Click me!</button>
    <script>
  $('#my-button').click(function() {
    alert('Button clicked!');
  });
</script>
  </body>
</html>
```

### Lodash
Lodash is a JavaScript library that provides utility functions for common programming tasks. 
It provides a set of functions for working with arrays, objects, strings, and more. 
Lodash is known for its performance and flexibility, and it is widely used in web development.

Here's an example of using Lodash to sort an array of objects by a property:

```jsx
import _ from 'lodash';

const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 },
];

const sortedUsers = _.sortBy(users, 'age');

console.log(sortedUsers);
```

## Conclusion:
In this lesson, we've learned about the difference between frameworks and libraries and explored some popular JavaScript 
frameworks and libraries. 
Frameworks and libraries can be powerful tools for improving your development process and building high-quality applications. 
By using pre-written code, you can save time and reduce the likelihood of errors in your code.
