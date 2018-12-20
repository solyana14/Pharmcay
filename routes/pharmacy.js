const express = require('express')
const Pharmacy = require('../models').Pharmacy
let pharmacyRouter = express.Router();
pharmacyRouter
.post('/create',(req,res)=>{
    // res.status(200).send('this is a pharmacy route')
    console.log(Date.now())
    Pharmacy.create({
        name:req.body.name,
        phoneNumber: req.body.phoneNumber,
        fax: req.body.fax,
        address: req.body.address
    }).then(pharma=>{
        res.status(200).send(pharma)
    }).catch(err=>{
        res.status(400).send(err)
    })
})
module.exports = pharmacyRouter