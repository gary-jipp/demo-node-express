
const getPets = function(client) {

  const sql = "select pets.*, owners.name as owner, \
  animals.name as animal from pets \
  join owners on owner_id=owners.id \
  join animals on animal_id=animals.id";

  client.query(sql)
    .then(res => {
      client.end();
      return res.rows;
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

const result = getPets(client);
console.log(result);