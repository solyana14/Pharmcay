const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should()
const app = require('../index')
chai.use(chaiHttp)
describe('Pharmacy', ()=>{
    it('should be able to create/register a Pharmacy',(done)=>{
        chai.request(app)
        .post('/pharmacy/create')
        .send({
            "name":"this is a name",
            "description":"this is the description",
        })
        .end((err,res)=>{
            console.log(res.body)
            res.should.have.status(200)
            res.body.should.have.property('name')
            res.body.should.have.property('description')
            done()
        })
    })

    it('should be not create/register a Pharmacy with out a name',(done)=>{
        chai.request(app)
        .post('/pharmacy/create')
        .send({
            "description":"werty",
        })
        .end((err,res)=>{
            console.log(res.body)
           res.should.have.status(400)
            res.body.should.have.property('errors')
            res.body.errors[0].should.have.property('message')
           
            done()
        })
    })

    // it('should be not create/register a Pharmacy with an invalid phoneNumber',(done)=>{
    //     chai.request(app)
    //     .post('/pharmacy/create')
    //     .send({
    //         "name": "test",
    //         "phoneNumber":"abcd2345",
    //         "fax":"34567",
    //         "address": 'welosefer'
    //     })
    //     .end((err,res)=>{
    //         // console.log(res.body)
    //        res.should.have.status(400)
    //         res.body.should.have.property('errors')
    //         res.body.errors[0].should.have.property('message')
            
    //         done()
    //     })
    // })

    // it('should be not create/register a Pharmacy with an invalid fax number',(done)=>{
    //     chai.request(app)
    //     .post('/pharmacy/create')
    //     .send({
    //         "name": "test",
    //         "phoneNumber":"2345",
    //         "fax":"34567sss",
    //         "address": 'welosefer'
    //     })
    //     .end((err,res)=>{
    //         // console.log(res.body)
    //        res.should.have.status(400)
    //         res.body.should.have.property('errors')
    //         res.body.errors[0].should.have.property('message')
          
    //         done()
    //     })
    // })
})