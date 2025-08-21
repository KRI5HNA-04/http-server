const http = require("http");
const fs = require("fs");
const { strict } = require("assert");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from home page");
});

app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

app.listen(8000, () => console.log("Server started at http://localhost:8000"));
