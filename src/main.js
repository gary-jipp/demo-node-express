
const { Client } = require("pg");
const client = new Client({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "pets",
});

client.connect();

// using Callback
client.query("select * from pets", (err, res) => {
  console.log(res.rows);
});

// using Promise (preferred)
client.query("select * from pets")
  .then(res => {
    console.log(res.rows);
    client.end();
  });