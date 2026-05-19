const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.url === "/employees") {

    fs.readFile("employees.json", (err, data) => {

      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(data);

    });

  }

  else if (req.url === "/health") {

    res.writeHead(200);

    res.end("Application Healthy");

  }

  else {

    res.writeHead(404);

    res.end("Page Not Found");

  }

});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});