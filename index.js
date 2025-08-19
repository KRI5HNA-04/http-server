const http = require("http");
const fs = require("fs");
const { strict } = require("assert");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} New request received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("This is Home Page");
        break;
      case "/about":
        const username = myUrl.query.name;
        res.end(`Hello, ${username}`);
        break;
      case "/search":
        const searchQuery = myUrl.query.search_query;
        res.end(`Your search query is: ${searchQuery}`);
        break;
      default:
        res.end("404 not found");
    }
  });
});

myServer.listen(8000, () => console.log("server Started"));
