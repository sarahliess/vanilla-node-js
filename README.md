# Some vanilla Node.js exercises and their corrections.

## Exercises:

### Exercise 1
In a file exercise1.js: Create a code that displays hello in the console.

To launch this file, type in your terminal node exercise1.js.

### Exercise 2
In a file exercise2.js: Using the writeFile function, write hello in a file called test.html.

### Exercise 3
In a file exercise3.js: Using the readFile function, read the file test.html and display the content in the console.

### Exercise 4
In a file exercise4.js: Write the work done in the previous exercises in ES5 or ES6 (depending which version you used).

### Exercise 5
In a file exercise5.js: Copy this code and run it in the console. What’s going on?

```
var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});
server.listen(80);
console.log("Server running at http://127.0.0.1:80/");
```

### Exercise 6
In a file exercise6.js: Install the module axios and retrieve the html code from google.com.
