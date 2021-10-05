
const getPets = function(client, name) {

  const sql = "select pets.*, owners.name as owner, \
    animals.name as animal from pets \
    join owners on owner_id=owners.id \
    join animals on animal_id=animals.id \
    where pets.name=$1";

  return client.query(sql, [name])
    .then(res => {
      // client.end();
      return res.rows;
      // console.log(res.rows);
    })
    .catch(err => console.log(err.message));
};

const getAnimals = function(client, name) {

  // const sql = `select * from animals where name=${name}`;
  // const sql = `select * from animals where name=\'${name}\'`;
  const sql = `select * from animals where name=$1`;

  return client.query(sql, [name])
    .then(res => {
      // client.end();
      return res.rows[0];
      // console.log(res.rows);
    })
    .catch(err => console.log(err.message));
};

const { Client } = require("pg");
const client = new Client({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "pets",
});

client.connect();

const args = process.argv.slice(2);
getAnimals(client, args[0])
  .then(result => {
    console.log(result);
    client.end();
  });