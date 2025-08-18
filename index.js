const http = require("http");
const fs = require("fs");
const { strict } = require("assert");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New request received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("This is Home Page");
        break;
      case "/about":
        res.end("This is About Page");
        break;
      default:
        res.end("404 not found");
    }
  });
});

myServer.listen(8000, () => console.log("server Started"));
