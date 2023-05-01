const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Home Page</h1>");
  }

  if (req.url === "/users") {
    const users = [
      { id: 1, name: "John Doe", email: "john@doe.com" },
      { id: 2, name: "Jane Doe", email: "jane@doe.com" },
    ];
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log("Rodando na porta ", port));
