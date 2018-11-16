const express = require('express')
let pharmacyRouter = express.Router()

pharmacyRouter
.get('/',(req,res)=>{
    res.status(200).send('this is a pharmacy route')
})
module.exports = pharmacyRouter