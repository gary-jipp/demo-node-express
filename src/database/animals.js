
const getAnimals = function(pool) {
  console.log("getPets");

  const sql = "select * from animals";

  return pool.query(sql)
    .then(res => {
      return res.rows;
    });
};


const addAnimal = function(pool, name) {
  const sql = 'insert into animals (name) values ($1) returning *';

  return pool.query(sql, [name])
    .then(res => {
      console.log(res.rows);
      return res.rows[0];
    });
};

module.exports = { getAnimals, addAnimal };