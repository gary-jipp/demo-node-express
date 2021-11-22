const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const pool = require('./database/connect');

const animalRoutes = require('./routes/animalRoutes');
const petRoutes = require('./routes/petRoutes');

app.use('/api/animals', animalRoutes(pool));
app.use('/api/pets', petRoutes(pool));

app.get("/hello", (_, res) => {
  res.send("Hello Express World\n\n");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
