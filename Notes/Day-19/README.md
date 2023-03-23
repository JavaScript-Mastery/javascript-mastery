# Day-18: Node.js and Express.js

First, let's start with some basic definitions:

- **Node.js:** a runtime environment for JavaScript that allows you to run JavaScript on the server-side. 
It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
- **Express.js:** a popular web framework for Node.js that provides a set of features and tools for building web applications and APIs.

First, let's start with Node.js. 
Node.js is a JavaScript runtime built on the V8 JavaScript engine. 
It allows you to run JavaScript code outside of a web browser, which means you can use it to create server-side applications.

To get started with Node.js, you'll need to install it on your computer. 
You can download it from the official Node.js website: https://nodejs.org/en/download/.

Once you have Node.js installed, you can create a new Node.js project by creating a new folder and opening a terminal in that folder. 
Then, run the following command to initialize a new Node.js project:

```bash
npm init
```

This will create a `package.json` file in your project folder, which will contain information about your project and its dependencies.

Next, let's move on to Express.js. 
Express.js is a popular web framework for Node.js that makes it easy to create web applications and APIs. 
To use Express.js, you'll need to install it as a dependency in your project:

```bash
npm install express
```

Once you have Express.js installed, you can create a new Express.js app by creating a new JavaScript file in your project folder, 
and adding the following code:

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
```

This code creates a new Express.js app, sets up a basic route that responds with "Hello World!" when you visit the root URL (/), and 
starts a server listening on port 3000.

To run this app, save the code to a file named app.js in your project folder, and then run the following command in your terminal:

```bash
node app.js
```

This will start the server, and you should be able to visit http://localhost:3000 in your web browser to see the "Hello World!" message.

That's a basic introduction to Node.js and Express.js. 
From here, you can continue to explore the many features and capabilities of these powerful tools!

One of the most powerful features of Express.js is its ability to handle HTTP requests and responses. 
Let's take a closer look at how this works.

In Express.js, you can define routes that handle specific HTTP requests. 
For example, you might create a route that handles GET requests to the `/users` URL, like this:

```js
app.get('/users', (req, res) => {
  // code to handle the /users request goes here
})
```

In this code, `app` is the Express.js app object, and `get` is a method that registers a new route that handles GET requests to the 
specified URL. The function passed as the second argument is called a "handler function", and it will be executed when the route is 
accessed.

The `req` and `res` parameters in the handler function represent the HTTP request and response objects, respectively. 
You can use these objects to read data from the request, and send data back in the response.

For example, you might use the `req.query` object to read query string parameters from the request URL, like this:

```js
app.get('/users', (req, res) => {
  const { name } = req.query
  res.send(`Hello, ${name}!`)
})
```

In this code, we're using destructuring to extract the `name` parameter from the `req.query` object. 
Then, we're sending a response back to the client with a personalized greeting.

There are many other features and capabilities of Express.js, including middleware, templates, and more. 
If you're interested in learning more, I'd recommend checking out the official Express.js documentation: https://expressjs.com/.
