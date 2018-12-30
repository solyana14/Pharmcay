const express = require('express')
const Pharmacy = require('../models').Pharmacy
const Address = require('../models').Address

let pharmacyRouter = express.Router();
pharmacyRouter
.post('/create',(req,res)=>{
    // res.status(200).send('this is a pharmacy route')

    Pharmacy.create({
        name:req.body.name,
        description: req.body.description
    }).then(pharma=>{
        res.status(200).send(pharma)
    }).catch(err=>{
        res.status(400).send(err)
    })
})
//this is a test route for testing
.post('/test',(req,res)=>{
    // res.status(200).send('this is a pharmacy route')
    console.log(Date.now())
    Address.create({
        city:req.body.city,
        longitude: req.body.longitude,
        lattitude: req.body.lattitude
    }).then(address=>{
         res.status(200).send(address)
        
    }).catch(err=>{
        res.status(400).send(err)
    })
})
module.exports = pharmacyRouter