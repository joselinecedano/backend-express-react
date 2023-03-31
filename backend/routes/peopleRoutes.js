//this is where the db model will go 

//DEPENDECIES
const router = require('express').Router()
// all of our methods inside of controllers/index.js
const {peopleCtrlr} = require('../controllers')

//ROUTES - METHODS //
router.get('/', peopleCtrlr.getPeople)
router.post('/',peopleCtrlr.createPeople)

//EXPORT ROUTER
module.exports = router