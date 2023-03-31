const router = require('express').Router()
//import people routes methods
const peopleRoute = require('./peopleRoutes')
//URL Directory
router.use('/people', peopleRoute)

module.exports = router