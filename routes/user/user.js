const express = require('express')
const Pharmacy = require('../../models').Pharmacy
const Address = require('../../models').Address
const Medicine = require('../../models').Medicine
const Manufacturer = require('../../models').Manufacturer

// let test = require('../../models')
const capitalize = require('../../functions/capitalize')
let userRouter = express.Router();

userRouter
//search for a pharmacy
.post('/getMedicine',(req,res)=>{
    Medicine.findAll(
    {include: [{ all: true, nested: true }]},{where:{
        name: req.body.name,
        dosage: req.body.dosage
    }}
    ).then(medicine=>{
        res.status(200).send(medicine)
    })
    
})  
.get('/getPharmacy/1',(req,res)=>{
    Pharmacy.findOne(
    {include: [{ all: true, nested: true }]},{where:{
        id: req.params.id
    }}
    ).then(pharmacy=>{
        res.status(200).send(pharmacy)
    })
    
})  


module.exports = userRouter