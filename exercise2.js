const fs = require("fs");

fs.writeFile("test.html", "Hello World!", function (err) {
  if (err) console.log(err);
});
