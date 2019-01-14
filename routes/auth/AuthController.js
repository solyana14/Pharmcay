//this is where all authentication and authorization is done
const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser")
const Pharmacy = require('../../models').Pharmacy
const Address = require('../../models').Address

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
var verifyToken = require('./VerifyTokens');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//register a pharmacy
router
.post('/register',(req,res)=>{
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    Pharmacy.create({
        name:req.body.name,
        description: req.body.description,
        username: req.body.username,
        password:hashedPassword,
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
       //here create the token
        let token = jwt.sign(
            {id:pharmacy.id},
            process.env.SECRET,
            { expiresIn:86400} //expires in 24 hours
            )
            res.status(200).send({ auth: true, token: token });
    }).catch(err=>{
        res.status(400).send(err)
    })
})
.post('/login',(req,res)=>{
    console.log(req.body)
    Pharmacy.findOne({where:{username:req.body.username}})
    .then(pharmacy=>{
       //console.log(pharmacy)
        if(!pharmacy){
            res.status(401).send("No pharmacy with username")
        }else{
              var passwordIsValid = bcrypt.compareSync(req.body.password, pharmacy.password);
                if(!passwordIsValid){
                    res.status(401).send("Password incorrect")
                }else{
                    var token = jwt.sign(
                        {id:pharmacy.id},process.env.SECRET,{expiresIn:86400})
                    res.status(200).send({auth:true,token:token,pharmacy:pharmacy})
                }
        }
      
    }).catch(err=>{
        res.status(404).send(err)
    })
    
})
.get('/me',verifyToken, function(req, res) {
        Pharmacy.findOne({where:{id:req.pharmacyId}}) // projection)
       .then(pharmacy=>{
        //next(pharmacy)  
         res.status(200).send(pharmacy)
       })
       .catch(err=>{
           res.send(400).send(err)
       })
    
  });
//   router.use((pharmacy, req, res, next) =>{
//     res.status(200).send(pharmacy);
//   });

  module.exports = router;