const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const { Pool } = require("pg");
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "pets",
});


app.get("/pets", (req, res) => {
  const sql = "select pets.*, owners.name as owner, \
    animals.name as animal from pets \
    join owners on owner_id=owners.id \
    join animals on animal_id=animals.id";

  return pool.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => console.log(err.message));
});

app.get("/hello", (req, res) => {
  res.send("Hello Express World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
