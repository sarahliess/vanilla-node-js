//In order to make import work, either: add "type": "module" to your package.json and run npm start (don't forget to define start in scripts) or change .js into .mjs file

// import fs from "fs";



const fs = require("fs");

fs.readFile("test.html", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
