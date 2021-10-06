const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const pool = require('./database/connect');
const { getAnimals, addAnimal } = require('./database/animals')(pool);
const { getPets } = require('./database/pets')(pool);

app.post("/animals", (req, res) => {
  const name = req.body.name;
  addAnimal(name)
    .then(row => {
      res.json(row);
    })
    .catch(err => console.log(err.message));
});

app.get("/animals", (req, res) => {
  getAnimals()
    .then(rows => {
      res.json(rows);
    })
    .catch(err => console.log(err.message));
});

app.get("/pets", (req, res) => {
  getPets(pool)
    .then(rows => {
      res.json(rows);
    })
    .catch(err => console.log(err.message));
});

app.get("/hello", (req, res) => {
  res.send("Hello Express World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
