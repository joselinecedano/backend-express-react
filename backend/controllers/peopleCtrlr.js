//Require model
const db = require("../models");
console.log(db);

const getPeople = (req, res) => {
  db.People.find({}) //<--- db has all of our models
    .then((foundPeople) => {
      if (!foundPeople) {
        res.status(404).json({ message: "can't do it burv. idk this person" });
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
const updatePerson = (req, res) => {
    db.People.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedPerson)=>{
        if(!updatedPerson){
            res.status(400).json({message: 'can`t do it bruv. cannot update person'})
    }else{
        res.status(200).json({data: updatedPerson, message: 'updatedPerson'})

        }
    })
}
const deletedPerson = (req, res)=>{
    db.People.findByIdAndDelete (req.params.id)
    .then((deletedPerson)=>{
        if(!deletedPerson){
            res.status(400).json({message: 'couldn`t do it bruv. could NOT delete person!'})
        }else{
            res.status(200).json({data: deletedPerson, message: 'deletedPerson'})
        }
    })
}

//EXPORT
module.exports = {
  getPeople,
  createPeople,
  updatePerson,
  deletedPerson
};
