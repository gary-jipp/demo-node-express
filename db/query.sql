 select * from pets 
  join owners on owner_id=owners.id
  join animals on animal_id=animals.id ;