const http = require("http");
const fs = require("fs");
const os = require("os");
http
  .createServer((req, res) => {
    console.log("Test");
    res.writeHead(200, { "Content-Type": "application/json" });
    // Logic to check RAM in GB?
    res.end(
      JSON.stringify({
        data: "hello world",
      })
    );
  })
  .listen(8000);
console.log("Runiing program");
