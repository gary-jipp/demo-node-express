const { Client } = require("pg");
const client = new Client({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "pets",
});

client.connect();

// const sql = "select * from pets \
// join owners on owner_id=owners.id \
// join animals on animal_id=animals.id";

const sql = "select pets.*, owners.name as owner, \
  animals.name as animal from pets \
  join owners on owner_id=owners.id \
  join animals on animal_id=animals.id";

// using Promise (preferred)
client.query(sql)
  .then(res => {
    console.log(res.rows);
    client.end();
  })
  .catch(err => console.log(err.message));
