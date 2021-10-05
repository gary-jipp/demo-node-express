const express = require('express');
const pool = require('./database/connect');
const getPets = require('./database/pets');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.post("/pets", (req, res) => {
  const name = req.body.name;

  const sql = 'insert into animals (name) values($1) \
  returning *';

  return pool.query(sql, [name])
    .then(result => {
      res.json(result.rows[0]);
    })
    .catch(err => console.log(err.message));
});

app.get("/pets", (req, res) => {
  getPets(pool)
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err.message));
});

app.get("/hello", (req, res) => {
  res.send("Hello Express World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
