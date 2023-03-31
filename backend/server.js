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


//ROUTES
app.get('/', (req,res)=>{
    res.send('EXPRESS REACT APP!!')
})
//I
//N
//D
//U
//C
//E
//S

//LISTENER
app.listen(PORT, ()=>console.log(`listening on PORT ${PORT}`));