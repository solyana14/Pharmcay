const express = require('express')
const Pharmacy = require('../../models').Pharmacy
const Address = require('../../models').Address
// let test = require('../../models')
let pharmacyRouter = express.Router();
let testPharma ;
pharmacyRouter
//register a pharmacy with a medicen 
.post('/create',(req,res)=>{
    //update here to creare multiple address at once
    Pharmacy.create({
        name:req.body.name,
        description: req.body.description,
        username: req.body.username,
        password: req.body.password
    }).then(pharmacy=>{
       let testPharma=pharmacy 
       //this should also work if the user doesn'y want any address
    return Address.create({
            city:req.body.city,
            longitude: req.body.longitude,
            lattitude: req.body.lattitude,
            PharmacyId: pharmacy.id
        })
        .then(address=>{
            address.setPharmacy(testPharma);
            res.status(200).send(testPharma)
        })
    }).catch(err=>{
        res.status(400).send(err)
    })
    
})
//this is a test route for testing
.post('/test',(req,res)=>{
    // res.status(200).send('this is a pharmacy route')

    Address.create({
        city:req.body.city,
        longitude: req.body.longitude,
        lattitude: req.body.lattitude,
        PharmacyId: 1
    }).then(address=>{
         res.status(200).send(address)
        
    }).catch(err=>{
        res.status(400).send(err)
    })
})
.get('/test', (req,res)=>{
    Address.findAll(
        {include: [{ all: true, nested: true }]}
        )
    .then(address=>{
        res.status(200).send(address)
    }).catch(err=>{
        res.status(400).send(err)
    })
})
.get('/allPharmacy', (req,res)=>{
    Pharmacy.findAll(
        {include: [{ all: true, nested: true }]}
        )
    .then(pharmacy=>{
        res.status(200).send(pharmacy)
    }).catch(err=>{
        res.status(400).send(err)
    })
})
module.exports = pharmacyRouter