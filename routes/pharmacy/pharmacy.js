const express = require('express')
const Pharmacy = require('../../models').Pharmacy
const Address = require('../../models').Address
const Medicine = require('../../models').Medicine
const Manufacturer = require('../../models').Manufacturer

// let test = require('../../models')
const capitalize = require('../../functions/capitalize')
let pharmacyRouter = express.Router();
let testPharma,testMed ;
const verifyToken = require('../auth/VerifyTokens')
pharmacyRouter
//register a pharmacy 
.post('/create',(req,res)=>{
    //update here to creare multiple address at once
    //get the address from the req.body as array
    Pharmacy.create({
        name:req.body.name,
        description: req.body.description,
        username: req.body.username,
        password: req.body.password,
        Addresses:[
            {
                city:req.body.city,
                longitude: req.body.longitude,
                lattitude: req.body.lattitude,
            }
        ]
    },{
        include:[Address]
    }).then(pharmacy=>{
       res.status(200).send(pharmacy)
    }).catch(err=>{
        res.status(400).send(err)
    })
    
})  
//verifyToken
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
// **problem
//updating a medicine affects all pharmacies having reference to this
// .patch('/medicine/:id',(req,res)=>{
//     let updates = req.body.updates
//     Medicine.findOne({where:{ id:req.params.id}})
//     .then((med)=>{
//         return med.update(updates)

//     }).then(updatedMed=>{
//         res.status(200).send(updatedMed)
//     })
// })
.post('/medicine',(req,res)=>{
    Medicine.create({
        name:"ibuprofen",
        //price: 15.50,
        quantity: 40,
        dosage: 500,
        CatagoryName:capitalize("Analgesics"),
        TypeName: capitalize("liquid")
    }).then(med=>{
        res.status(200).send(med)
    })
})
.post('/addMedicine/:id',(req,res)=>{
    //medidicines should be an array of medicines
    //console.log(req.body)
    let medicines = req.body.medicines
    //console.log(medicines)
    Medicine.findOrCreate({
        defaults: {
        name: medicines.name,
        dosage:medicines.dosage,
        CatagoryName:medicines.CatagoryName,
        TypeName:medicines.TypeName,
        Manufacturer:{
            name:medicines.ManufacturerName,
            description:medicines.ManufacturerDescription
        }
    },
    where:{
        name: medicines.name,
        dosage:medicines.dosage,
           }
    }
    // ,{include:[{model: Manufacturer,where:{name:medicines.ManufacturerName}}] }
        )
        .spread((medicine,created)=>{
           // console.log(medicine)
          //let newPharma= 
           //pharmacy.setMedicines(medicine)
            //res.status(200).send(pharmacy)
            return Pharmacy.findOne({where:{id:req.params.id}})
            .then(pharmacy=>{
                pharmacy.addMedicines(medicine)
                res.status(200).send(pharmacy)
            })
        })
        .catch(err=>{
            res.status(404).send(err)
        })
})
.get('/medicine',(req,res)=>{
    Medicine.findAll( {include: [{ all: true, nested: true }]}).then(med=>{
        testMed=med[0]
        res.status(200).send(med)
    })
})
//update the pharmacy profile
.patch('/updatePharmacy/:id',(req,res)=>{
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
module.exports = pharmacyRouter