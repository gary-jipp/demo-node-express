const express = require('express');
const router = express.Router();

const routes = function(pool) {
  // Destructure returned object into functions
  const { getAnimals, addAnimal } = require('../database/animals')(pool);

  router.post("/", (req, res) => {
    const name = req.body.name;
    addAnimal(name)
      .then(row => {
        res.json(row);
      })
      .catch(err => console.log(err.message));
  });

  router.get("/", (req, res) => {
    getAnimals()
      .then(rows => {
        res.json(rows);
      })
      .catch(err => console.log(err.message));
  });

  return router;
};

module.exports = routes;