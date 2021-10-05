
const getPets = function(client, name) {

  console.log("getPets");
  
  const sql = "select pets.*, owners.name as owner, \
    animals.name as animal from pets \
    join owners on owner_id=owners.id \
    join animals on animal_id=animals.id" ;

  return client.query(sql)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.log(err.message));
};

module.exports = getPets;