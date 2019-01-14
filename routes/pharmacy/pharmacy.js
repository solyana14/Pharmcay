const express = require('express')
const Pharmacy = require('../../models').Pharmacy
const Address = require('../../models').Address
const Medicine = require('../../models').Medicine
const Manufacturer = require('../../models').Manufacturer
const _ = require('lodash')
// let test = require('../../models')
const capitalize = require('../../functions/capitalize')
const isEmpty = require('../../functions/isEmpty')
let pharmacyRouter = express.Router();
let testPharma,testMed ;
const verifyToken = require('../auth/VerifyTokens')
pharmacyRouter
//register a pharmacy 

.get('/allPharmacy',(req,res)=>{
    Pharmacy.findAll(
        {include: [{ all: true, nested: true }]}
        )
    .then(pharmacy=>{
        res.status(200).send(pharmacy)
    }).catch(err=>{
        res.status(400).send(err)
    })
})
//updating a medicine affects all pharmacies having reference to this
.patch('/updateMedicine/:id',verifyToken,(req,res)=>{
    let updates = req.body.updates
    Medicine.findOne({where:{ id:req.params.id}})
    .then((med)=>{
        return med.update(updates)
    }).then(updatedMed=>{
        res.status(200).send(updatedMed)
    })
})

//add/register a medicine to a pharmacy
.post('/addMedicine/:id',verifyToken,(req,res)=>{
   console.log(req.body)
   Medicine.findAll({where:{
    name: req.body.name,
    dosage:req.body.dosage,
     ManufacturerName: req.body.Manufacturer.name
   }}).then(result=>{
       //res.send(result)
     //  console.log(result.length ===0)
       //isEmpty(result)
       if(result.length ===0){
        return  Medicine.create({
            name: req.body.name,
        dosage:req.body.dosage,
        CatagoryName:_.startCase(_.toLower(req.body.CatagoryName)),
        TypeName:_.startCase(_.toLower(req.body.TypeName)),
        PharmacyId:req.params.id,
        price:req.body.price,
        quantity: req.body.quantity,
        Manufacturer: {
                name: req.body.Manufacturer.name,
                description: req.body.Manufacturer.description
            }
        },{
            include:[Manufacturer]
        })
       }
       else{
           return "medicine exists"
       }
   }).then(newMedicine=>{
       res.status(200).send(newMedicine)
   })
   .catch(err=>{
       res.status(404).send(err)
   })
   
  
})
// .get('/medicine',(req,res)=>{
//     Medicine.findAll( {include: [{ all: true, nested: true }]}).then(med=>{
//         testMed=med[0]
//         res.status(200).send(med)
//     })
// })
//update the pharmacy profile
.patch('/updatePharmacy/:id',verifyToken,(req,res)=>{
    let updates = req.body.updates
     //send updates from the body as object for flexibility of updating as many cloumns as we want
    Pharmacy.findOne({where:{id:req.params.id}})
    .then(pharmacy=>{
        //here it shoulld be able to update address of pharmacy
       // Address.findAll({where:})
        return pharmacy.update(updates)
    }).then(updatedPharmacy=>{
        res.status(200).send(updatedPharmacy)
    })
    .catch(err=>{
        res.status(404).send(err)
    })
})
//pharmacyRouter.use(verifyToken())
module.exports = pharmacyRouter