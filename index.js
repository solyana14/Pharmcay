const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const pharmacyRouter = require('./routes/pharmacy')
let PORT = process.env.PORT
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/pharmacy', pharmacyRouter)

app.get('/',(req,res)=>{
    res.send('hello from tttt')
})
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})
module.exports = app;