The project is a simple web application that allows users to create and view "notes". 
Each note consists of a title and a body, and the user can create, read, update, and delete notes.

The application uses Node.js and Express for the server-side code, and MongoDB for the database. 
Here are the steps to create the project:

1. Install the required packages:

```bash
npm install express mongoose body-parser helmet csurf bcryptjs express-session connect-mongo cookie-parser dotenv
```

2. Create a `.env` file in the root directory of your project with the following variables:

```env
SESSION_SECRET=your_session_secret_key
MONGODB_URI=your_mongodb_uri
```

Replace `your_session_secret_key` with a random string, and `your_mongodb_uri` with your actual MongoDB connection string.

3. Create a `models/Note.js` file with the following code:

```JavaScript 
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Note', noteSchema);
```

4. Create a `middlewares/auth.js` file with the following code:

```JavaScript 
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const { SESSION_SECRET, MONGODB_URI } = process.env;

module.exports = function (app) {
  // Use cookies and sessions to manage authentication
  app.use(cookieParser());
  app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ url: MONGODB_URI }),
    cookie: {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  }));

  // Use CSRF protection
  app.use(csurf());
  app.use(function(req, res, next) {
    res.locals.csrfToken = req.csrfToken();
    next();
  });
};
```

This middleware sets up cookies and sessions for managing authentication, and also enables CSRF protection using the `csurf` package.

5. Create a `middlewares/authRequired.js` file with the following code:

```JavaScript 
module.exports = function (req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/login');
  }
};
```

This middleware checks if the user is authenticated by checking if the `userId` property is set in the session. 
If not, it redirects the user to the login page.

6. Create a `middlewares/errorHandler.js` file with the following code:

```JavaScript 
module.exports = function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Internal server error');
};
```

This middleware handles any errors that occur in the application by logging the error and returning a 500 status code.

7. Create a `routes/index.js` file with the following code:

```JavaScript 
const express = require('express');
const bcrypt = require('bcryptjs');
const authRequired = require('../middlewares/authRequired');
const errorHandler = require('../middlewares/errorHandler');
const Note = require('../models/Note');

const router = express.Router();

// Show the home page
router.get('/', authRequired, async function(req, res, next) {
  try {
    const notes = await Note.find({}).sort('-updatedAt');
    res.render('index', { notes });
  } catch (err) {
    next(err);
  }
});

// Show the login page
router.get('/login', function(req, res) {
  res.render('login');
});

// Process the login form
router.post('/login', async function(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.userId = user._id;
    res.redirect('/');
  } else {
    res.render('login', { error: 'Invalid email or password' });
  }
});

// Show the registration page
router.get('/register', function(req, res) {
  res.render('register');
});

// Process the registration form
router.post('/register', async function(req, res) {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    await user.save();
    req.session.userId = user._id;
    res.redirect('/');
  } catch (err) {
    res.render('register', { error: err.message });
  }
});

// Show the create note page
router.get('/notes/new', authRequired, function(req, res) {
  res.render('new-note');
});

// Process the create note form
router.post('/notes', authRequired, async function(req, res, next) {
  try {
    const note = new Note(req.body);
    await note.save();
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

// Show the edit note page
router.get('/notes/:id/edit', authRequired, async function(req, res, next) {
  try {
    const note = await Note.findById(req.params.id);
    res.render('edit-note', { note });
  } catch (err) {
    next(err);
  }
});

// Process the edit note form
router.put('/notes/:id', authRequired, async function(req, res, next) {
  try {
    await Note.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

// Delete a note
router.delete('/notes/:id', authRequired, async function(req, res, next) {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// Handle 404 errors
router.use(function(req, res) {
  res.status(404).render('404');
});

// Handle all other errors
router.use(errorHandler);

module.exports = router;
```

8. Create a `views/layout.hbs` file with the following code:

```hbs
<!DOCTYPE html>
<html>
<head>
  <title>Notes App</title>
  <link rel="stylesheet" href="/styles.css">
  {{{csurfToken}}}
</head>
<body>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      {{#if session.userId}}
        <li><a href="/notes/new">New Note</a></li>
        <li><a href="/logout">Logout</a></li>
      {{else}}
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      {{/if}}
    </ul>
  </nav>
  {{{body}}}
</body
```

9. Create a `views/index.hbs` file with the following code:

```hbs
{{#if notes.length}}
  <ul>
    {{#each notes}}
      <li>
        <a href="/notes/{{this._id}}">{{this.title}}</a>
        <form class="delete-note-form" action="/notes/{{this._id}}" method="post">
          <input type="hidden" name="_method" value="DELETE">
          <button type="submit">Delete</button>
        </form>
      </li>
    {{/each}}
  </ul>
{{else}}
  <p>No notes found</p>
{{/if}}
```

10. Create a `views/login.hbs` file with the following code:

```hbs
{{#if error}}
  <p class="error">{{error}}</p>
{{/if}}

<form method="post" action="/login">
  <label for="email">Email</label>
  <input type="email" name="email" required>

  <label for="password">Password</label>
  <input type="password" name="password" required>

  <button type="submit">Login</button>
</form>
```

11. Create a `views/register.hbs` file with the following code:

```hbs
{{#if error}}
  <p class="error">{{error}}</p>
{{/if}}

<form method="post" action="/register">
  <label for="name">Name</label>
  <input type="text" name="name" required>

  <label for="email">Email</label>
  <input type="email" name="email" required>

  <label for="password">Password</label>
  <input type="password" name="password" required>

  <button type="submit">Register</button>
</form>
```

12. Create a `views/new-note.hbs` file with the following code:

```hbs
<form method="post" action="/notes">
  <label for="title">Title</label>
  <input type="text" name="title" required>

  <label for="content">Content</label>
  <textarea name="content" required></textarea>

  <button type="submit">Save</button>
</form>
```

13. Create a `views/edit-note.hbs` file with the following code:

```hbs
<form method="post" action="/notes/{{note._id}}">
  <input type="hidden" name="_method" value="PUT">

  <label for="title">Title</label>
  <input type="text" name="title" value="{{note.title}}" required>

  <label for="content">Content</label>
  <textarea name="content" required>{{note.content}}</textarea>

  <button type="submit">Save</button>
</form>
```

14. Create a `views/404.hbs` file with the following code:

```hbs
<h1>404 Page Not Found</h1>
```

15. Create a `views/error.hbs` file with the following code:

```hbs
<h1>Error</h1>
<p>{{error.message}}</p>
```

16. Create a `public/styles.css` file with the following code:

```css
nav {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
}

nav a {
  color: #fff;
  padding: 0.5rem 1rem;
text-decoration: none;
}

nav a:hover {
text-decoration: underline;
}

.error {
color: red;
}

.delete-note-form {
display: inline;
}

textarea {
height: 300px;
resize: vertical;
}
```


17. Start the server by running the command `npm start`. Open your browser and go to `http://localhost:3000` to view the app. 
You should see the home page with the message "Welcome to the notes app".

18. Click on the "Register" link in the navigation bar and create a new user account.

19. Once you have registered, you will be redirected to the login page. Log in with your email and password.

20. You should now see the home page with the message "Welcome to the notes app". Click on the "New Note" link in the navigation bar 
and create a new note.

21. Once you have created a note, you will be redirected to the home page where you should see a list of all your notes.

22. Click on a note title to view the note. You can also edit or delete the note from this page.

Congratulations, you have built a basic notes app with security and performance features in JavaScript using Node.js and Express! 
This project demonstrates how to implement user authentication, input validation, error handling, and database integration in a

