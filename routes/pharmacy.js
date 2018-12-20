const express = require('express')
const Pharmacy = require('../models').Pharmacy
let pharmacyRouter = express.Router()

pharmacyRouter
.post('/create',(req,res)=>{
    // res.status(200).send('this is a pharmacy route')
    console.log(Date.now())
    Pharmacy.create({name:'test'}).then(pharma=>{
        res.send(pharma)
    }).catch(err=>{
        res.status(400).send(err)
    })
})
module.exports = pharmacyRouter