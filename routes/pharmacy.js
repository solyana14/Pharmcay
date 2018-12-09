const express = require('express')
const Pharmacy = require('../models').Pharmacy
let pharmacyRouter = express.Router()

pharmacyRouter
.post('/',(req,res)=>{
    // res.status(200).send('this is a pharmacy route')
    console.log(Date.now())
    Pharmacy.create({name:'test'}).then(pharma=>{
        res.send(pharma)
    })
})
module.exports = pharmacyRouter