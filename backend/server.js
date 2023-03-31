//DEPENDENCIES
//get .env variables
require ('dotenv').config()
//pull PORT from .env
const {PORT} = process.env
console.log(PORT)
//import express
const express = require('express')
//create application object
const app = express()
//CROSS.ORIGIN.RESOURCE.SHARING
const cors = require('cors')

//MIDDLEWARE
app.use(cors())
//prevent cors errors and allows us open access to all origins
app.use(express.urlencoded({extended:true}))
//allows us access to req.body object
app.use(express.json())
//parse json

//ROUTES
//import all available routes in our /routes/index.js
const routes = require ('./routes/index.js')
//check the routes for matches
app.use('/', routes)
//if no matches found, use this as catch route and send this repsonse
app.use((req,res)=>{res.status(404).json({message:`no sirrrrrrr, this is not a route!`})})

//I
//N
//D
//U
//C
//E
//S

//LISTENER
app.listen(PORT, ()=>console.log(`listening on PORT ${PORT}`));