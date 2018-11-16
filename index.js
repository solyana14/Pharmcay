const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const pharmacyRouter = require('./routes/pharmacy')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/pharmacy', pharmacyRouter)

app.get('/',(req,res)=>{
    res.send('hello from tttt')
})
app.listen(4000,()=>{
    console.log('server started on port 4000')
})
module.exports = app;