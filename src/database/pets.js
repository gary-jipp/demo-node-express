module.exports = function() {

  const getPets = function(pool) {
    console.log("getPets");

    const sql = "select pets.*, owners.name as owner, \
      animals.name as animal from pets \
      join owners on owner_id=owners.id \
      join animals on animal_id=animals.id" ;

    return pool.query(sql)
      .then(res => {
        return res.rows;
      });
  };

  return { getPets };
};
