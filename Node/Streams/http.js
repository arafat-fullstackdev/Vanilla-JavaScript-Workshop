const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Node JS developer!");
    res.write("Hello Full Stack JS developer!");

    res.end();
  } else if (req.url === "/about") {
    res.write("Functional Programming");
    res.end();
  } else {
    res.write("Error ! Try again");
    res.end();
  }
});

server.listen(3000);

console.log("listening on port 3000");
