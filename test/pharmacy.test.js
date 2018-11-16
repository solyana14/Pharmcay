const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should()
const app = require('../index')
chai.use(chaiHttp)
describe('Pharmacy', ()=>{
    it('this is a first test',(done)=>{
        chai.request(app)
        .get('/pharmacy')
        .end((err,res)=>{
            console.log(res.body)
            res.should.have.status(200)
            done()
        })
    })
})