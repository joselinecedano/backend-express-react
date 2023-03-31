//Require model
const db = require("../models");
console.log(db);

const getPeople = (req, res) => {
  db.People.find({}) //<--- db has all of our models
    .then((foundPeople) => {
      if (!foundPeople) {
        res.status(404).json({ message: "idk this person" });
      } else {
        res.status(200).json({ data: foundPeople });
      }
    })
}

const createPeople = (req, res) => {
  db.People.create(req.body)
  .then((createdPerson)=>{
    if(!createdPerson){
        res.status(404).json({message: 'can`t do it bruv. cannot create person'})
    }else{
        res.status(201).json({data: createdPerson})
    }
  })
}

//EXPORT
module.exports = {
  getPeople,
  createPeople,
};
