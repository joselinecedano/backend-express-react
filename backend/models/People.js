//DEPENDENCIES
const mongoose = require('mongoose')

//MODELS
const PeopleSchema = new mongoose.Schema({
    name: String, 
    image: String, 
    title: String,
})

//set People schema to People variable 
const People = mongoose.model('People', PeopleSchema)

//export our Schema as People
module.exports = People