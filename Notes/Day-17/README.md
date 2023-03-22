# Day-17 Security and Performance

## Security

### 1. 1. Cross-Site Scripting (XSS)

XSS is a type of security vulnerability that allows attackers to inject malicious code into web pages viewed by other users. 
This is often accomplished by taking advantage of user input fields, such as form inputs or URL parameters.

To prevent XSS attacks, you should:
- Always validate user input
- Use encoding functions (such as `encodeURIComponent()` or `encodeURI()`) to sanitize user input before using it in HTML or JavaScript
- Use a Content Security Policy (CSP) to restrict the types of content that can be loaded on your web page

Here's an example of how to use `encodeURIComponent()` to sanitize user input:

```JavaScript 
let userInput = "<script>alert('hello');</script>";
let sanitizedInput = encodeURIComponent(userInput);
// sanitizedInput now contains "%3Cscript%3Ealert('hello')%3B%3C/script%3E"
```

### 2. Cross-Site Request Forgery (CSRF)

CSRF is another type of security vulnerability that allows attackers to perform actions on behalf of a user without their knowledge or consent. 
This is often accomplished by tricking the user into clicking a link or visiting a website that sends a request to the target site.

To prevent CSRF attacks, you should:
- Use a random, unpredictable token in your forms that is validated on the server-side before processing the request
- Use the SameSite cookie attribute to prevent cookies from being sent on cross-site requests
- Use the Referrer-Policy header to control the amount of information sent in the Referer header on cross-site requests

Here's an example of how to use a CSRF token:

```JavaScript 
<form action="/process-form" method="post">
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
  <!-- rest of form goes here -->
</form>
```

### 3. Injection Attacks

Injection attacks allow attackers to execute arbitrary code in your application by inserting malicious input into user input fields, 
such as form inputs or URL parameters.

To prevent injection attacks, you should:
- Always validate and sanitize user input before using it in SQL queries or other sensitive operations
- Use prepared statements or parameterized queries to prevent SQL injection attacks

Here's an example of how to use a parameterized query in Node.js:

```JavaScript 
let userId = 123;
let query = "SELECT * FROM users WHERE id = ?";
db.query(query, [userId], function(err, results) {
  // process results
});
```

## Performance

### 1. Minification

Minification is the process of removing unnecessary characters from your JavaScript code (such as whitespace and comments) to reduce 
its size and improve load times.

To minify your code, you can use tools such as UglifyJS or Terser. Here's an example of how to use UglifyJS:

```bash
uglifyjs myscript.js -o myscript.min.js
```

### 2. Caching

Caching is the process of storing frequently accessed data (such as JavaScript files) in the user's browser cache to reduce load 
times on subsequent requests.

To enable caching, you can set the Cache-Control header on your server to control how long the browser should cache the file. 

For example:

```JavaScript 
app.use(express.static('public', { maxAge: '1d' }));
```
This sets the `max-age` directive to 1 day, which tells the browser to cache the file for 24 hours.

### 3. Lazy Loading

Lazy loading is the process of deferring the loading of non-critical resources (such as images or JavaScript files) until they are 
actually needed. This can significantly reduce initial load times for your web page.

To implement lazy loading for JavaScript files, you can use tools such as LoadJS or LazyLoad. 

Here's an example of how to use LoadJS:

```JavaScript 
<!-- load LoadJS library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/loadjs/4.3.1/loadjs.min.js"></script>

<!-- defer loading of myscript.js until it is actually needed -->
<script>
  loadjs('/path/to/myscript.js', 'myscript');
</script>
```

This will load the `myscript.js` file asynchronously only when it is actually needed.

### 4. Code Optimization

Code optimization is the process of improving the efficiency of your JavaScript code by removing redundant or unnecessary operations.

To optimize your code, you can use tools such as Google's Closure Compiler or UglifyJS. These tools can perform optimizations such as 
dead code elimination, function inlining, and variable renaming to reduce the size and improve the performance of your code.

Here's an example of how to use Closure Compiler:

```bash
java -jar closure-compiler.jar --js myscript.js --js_output_file myscript.min.js
```

This will optimize your `myscript.js` file and save the result to `myscript.min.js`.
