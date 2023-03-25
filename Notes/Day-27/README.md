# Day 27 - TypeScript with React and Node.js

TypeScript is a superset of JavaScript that adds static typing to the language. 
It provides many benefits, including better code organization, improved debugging, and fewer runtime errors. 
React and Node.js are two popular frameworks that can be used with TypeScript to build powerful web applications.

### Creating a TypeScript React Component:
To create a TypeScript component in React, you can use the `React.FC` (Function Component) type, which takes in props as a generic. 

Here's an example:

```ts
import React from 'react';

interface Props {
  name: string;
  age: number;
}

const MyComponent: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
};

export default MyComponent;
```

In the above example, we define a Props interface which specifies the props that our component will receive. 
We then define our component using the `React.FC` type, passing in the Props interface as a generic. 
We can then destructure the props in the component function and use them to render our UI.

### Creating a TypeScript Node.js Application:
To create a TypeScript application in Node.js, we first need to install TypeScript and configure our project to use it. 

Here's how:

1. Install TypeScript globally using `npm install -g typescript`
2. Initialize a new Node.js project using `npm init`
3. Create a `tsconfig.json` file in the root directory of your project with the following content:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["./src/**/*"]
}
```

In the above configuration, we specify that we want to target ES6, output our compiled code to a `dist` directory, and include files 
from the `src` directory. We also enable strict type checking and set `esModuleInterop` to true to allow for easier interoperability 
between TypeScript and CommonJS modules.

4. Create a `src` directory and add a new TypeScript file, e.g. `index.ts`:

```ts
function greeter(name: string) {
  console.log(`Hello, ${name}!`);
}

greeter('World');
```

In the above example, we define a simple `greeter` function that takes in a `name` parameter and logs a greeting to the console. 
We then call this function with the argument `'World'`.

5. Compile the TypeScript code using `tsc`. This will generate a compiled JavaScript file in the `dist` directory.

```
tsc
```

Communicating with TypeScript-based APIs:
To communicate with a TypeScript-based API, you will typically need to create TypeScript interfaces to represent the data being 
sent and received. 
Here's an example of how to do this:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch('/api/users');
  const data = await response.json();
  return data;
}

fetchUsers().then((users) => {
  console.log(users);
});
```

In the above example, we define a `User` interface that specifies the structure of the data being returned from the API. 
We then define an `async` function `fetchUsers` that sends a request to an API endpoint to retrieve a list of `users`. 
The response is parsed as JSON and returned as an array of User objects.

Finally, we call `fetchUsers` and log the returned data to the console.
