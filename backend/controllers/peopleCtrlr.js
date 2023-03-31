const getPeople = (req,res)=>{
    //db.People.find({})<--- db has all of our models
    res.send('this is getPeople!')
}
const createPeople = (req,res)=>{
    res.send('this is createPeople!!')
}

//EXPORT 
module.exports ={
    getPeople,
    createPeople
}