const http = require("http");
const fs = require("fs");
const { strict } = require("assert");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New request received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("Hello from server");
  });
});

myServer.listen(8000, () => console.log("server Started"));
