var jwt = require("jsonwebtoken")

let verifyToken = (req,res,next)=>{
    var token = req.headers['x-access-token']
    console.log(token)
    if(!token){
        res.status(403).send({auth:false,message:"No token provided"})
    }else{
        jwt.verify(token,process.env.SECRET,(err,decoded)=>{
            if(err){
                res.status(500).send({auth:false,message:"failed to authenticate token"})
            }else{
                   // if everything good, save to request for use in other routes
        req.pharmacyId = decoded.id;
        next();
            }
         
        })
    }
    
}
module.exports = verifyToken;