const express = require("express");

const app = express();
const port = 4000;

/**
 * - CRUD (Create, Read, Update, Delete)
 *
 * - GET    -> Read
 * - POST   -> Create
 * - PUT    -> Update
 * - DELETE -> Delete
 */
app.get("/", (req, res) => {
  return res.send(`Olá, servidor rodando na porta: ${port}`);
});

app.post("/", (req, res) => {
  return res.send("Olá, servidor rodando!");
});

app.put("/", (req, res) => {
  return res.send("Olá, servidor rodando!");
});

app.delete("/", (req, res) => {
  return res.send("Olá, servidor rodando!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
