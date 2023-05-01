const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Hello World</h1>");
});

app.get("/users", async (req, res) => {
  const users = {
    users: [
      { id: 1, name: "John Doe", email: "john@doe.com" },
      { id: 2, name: "Jane Doe", email: "jane@doe.com" },
      { id: 3, name: "Jack Doe", email: "jack@doe.com" },
      { id: 4, name: "Billy Doe", email: "billy@doe.com" },
      { id: 5, name: "Bob Doe", email: "bob@doe.com" },
      { id: 6, name: "Brian Doe", email: "brian@doe.com" },
      { id: 7, name: "Jonny Doe", email: "jonny@doe.com" },
      { id: 8, name: "James Doe", email: "james@doe.com" },
    ],
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.contentType("application/json");
  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => console.log("Rodando com Express na porta: ", port));
