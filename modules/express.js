const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Hello World</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe", email: "john@doe.com" },
    { id: 2, name: "Jane Doe", email: "jane@doe.com" },
  ];

  res.contentType("application/json");
  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => console.log("Rodando com Express na porta: ", port));
