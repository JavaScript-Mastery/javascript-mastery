Build a simple project using Node.js and Express.js. 
We'll create a web application that displays a list of books and allows users to add new books to the list.

Here are the steps we'll follow:

1. Create a new Node.js project and install Express.js
2. Set up a basic Express.js server
3. Create a route to display the list of books
4. Create a route to add new books to the list
5. Create a simple HTML form to add new books
6. Serve the HTML file using Express.js

Let's get started!

### Step 1: Create a new Node.js project and install Express.js

Create a new folder for your project and open a terminal in that folder. 
Then, run the following command to initialize a new Node.js project:

```bash
npm init
```

This will create a `package.json` file in your project folder. 
Next, install Express.js as a dependency by running the following command:

```
npm install express
```

### Step 2: Set up a basic Express.js server

Create a new file called `server.js` in your project folder, and add the following code:

```js
const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
```

This code creates a new Express.js app and starts a server listening on port 3000.

### Step 3: Create a route to display the list of books

Create a new file called `books.js` in your project folder, and add the following code:

```js
const express = require('express')
const router = express.Router()

const books = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
]

router.get('/', (req, res) => {
  res.send(`
    <h1>Books</h1>
    <ul>
      ${books.map(book => `<li>${book.title} by ${book.author}</li>`).join('')}
    </ul>
  `)
})

module.exports = router
```

This code defines a new Express.js router for handling book-related routes. 
We're using an array of sample books to start with, and defining a route that displays the list of books using a simple HTML template.

### Step 4: Create a route to add new books to the list

In the `books.js` file, add the following code to define a new route for adding books:

```js
router.post('/', (req, res) => {
  const { title, author } = req.body
  books.push({ title, author })
  res.redirect('/books')
})
```

This code defines a new route that handles POST requests to the `/books` URL. 
It reads the `title` and `author` fields from the request body, adds a new book to the `books` array, and redirects the user back to the 
list of books.

### Step 5: Create a simple HTML form to add new books

Create a new file called `add-book.html` in your project folder, and add the following code:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Add Book</title>
  </head>
  <body>
    <h1>Add Book</h1>
    <form action="/books" method="POST">
      <label for="title">Title:</label>
       <input type="text" id="title" name="title" required>
      <br>
      <label for="author">Author:</label>
      <input type="text" id="author" name="author" required>
      <br>
      <button type="submit">Add Book</button>
    </form>
  </body>
</html>
```

This code defines a simple HTML form that allows users to enter a book title and author, and submit the form to add a new book.

### Step 6: Serve the HTML file using Express.js

In the `server.js` file, add the following code to serve the `add-book.html` file:

```js
const books = require('./books')

app.use(express.urlencoded({ extended: true }))
app.use('/books', books)
app.use(express.static('public'))

app.get('/add-book', (req, res) => {
  res.sendFile('add-book.html', { root: __dirname })
})
```

This code sets up `Express.js` middleware to parse incoming form data, and to handle book-related routes using the `books.js` router. 
We're also serving a `public` folder as a static file directory, which we'll use later for storing CSS and JavaScript files.

Finally, we define a new route for serving the `add-book.html` file. 
This route simply sends the file to the client, allowing them to access the form and add new books.

### Step 7: Add some CSS and JavaScript files

Create a new folder called public in your project folder, and add the following files:

`public/style.css`:

```css
body {
  font-family: sans-serif;
  padding: 20px;
}

h1 {
  margin-top: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}
```

`public/script.js`

```js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  const titleInput = document.querySelector('#title')
  const authorInput = document.querySelector('#author')

  form.addEventListener('submit', event => {
    event.preventDefault()
    const title = titleInput.value.trim()
    const author = authorInput.value.trim()

    fetch('/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}`
    })
      .then(() => window.location.reload())
      .catch(console.error)
  })
})
```

These files define some basic CSS styles for our web app, and a JavaScript script that handles form submissions and sends them to our 
Express.js server using a fetch request.

### Step 8: Start the server and test the app

Run the following command in your terminal to start the server:

```
node server.js
```

Then, open your web browser and go to http://localhost:3000. You should see a list of sample books displayed.

To add a new book, click the "Add Book" button and fill out the form. 
Click the "Add Book" button again to submit the form and add the new book to the list.

Congratulations, you've built a simple web app using Node.js and Express.js!


