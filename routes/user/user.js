const express = require('express')
const Pharmacy = require('../../models').Pharmacy
const Address = require('../../models').Address
const Medicine = require('../../models').Medicine
const Manufacturer = require('../../models').Manufacturer

// let test = require('../../models')
const capitalize = require('../../functions/capitalize')
let userRouter = express.Router();
//{include: [{ all: true, nested: true }]}
userRouter
//search for a pharmacy
.post('/searchMedicine',(req,res)=>{
    console.log(req.body)
    Medicine.findAll(
    {include: [{model:Manufacturer},
        { model: Pharmacy,attributes:['id','name','description'],include:[{
            model:Address
        },
  ]}
    ], where:{
        name: req.body.name,
        dosage: req.body.dosage
    }}
    ).then(medicine=>{
        res.status(200).send(medicine)
    }).catch(err=>{
        res.status(404).send(err)
    })
    
})  
.get('/getPharmacy/:id',(req,res)=>{
    Pharmacy.findOne(
    {attributes:['id','name','description'],include: [{ model:Address },],where:{
        id: req.params.id
    }}
    ).then(pharmacy=>{
        res.status(200).send(pharmacy)
    })
    
})  


module.exports = userRouter