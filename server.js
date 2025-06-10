const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let tasks = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).send("ok");
});

app.delete("/tasks", (req, res) => {
  tasks = [];
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
