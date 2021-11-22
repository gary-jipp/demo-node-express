const express = require('express');
const router = express.Router();

const routes = function(pool) {
  const { getPets } = require('../database/pets')(pool);

  router.get("/", (_, res) => {
    getPets(pool)
      .then(rows => {
        res.json(rows);
      })
      .catch(err => console.log(err.message));
  });

  return router;
};

module.exports = routes;