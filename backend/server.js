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

//MIDDLEWARE

//ROUTES
//import all available routes in our /routes/index.js
const routes = require ('./routes/index.js')
//check the routes for matches
app.use('/', routes)
//if no matches found, use this as catch route and send this repsonse
app.use((req,res)=>{res.status(404).json({message:`no sirrrrrrr, this is not a route!`})})
//test route
// app.get('/', (req,res)=>{
//     res.send('EXPRESS REACT APP!!')
// })
//I
//N
//D
//U
//C
//E
//S

//LISTENER
app.listen(PORT, ()=>console.log(`listening on PORT ${PORT}`));