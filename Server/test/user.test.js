const chai = require('chai')
const chaiHttp = require('chai-http');
const app=require('../server')
const assert=chai.assert;
chai.use(chaiHttp);
describe('/login',()=>{
    it('giveninValidEmail_whenLoggedIn_thenItShouldNotBeLoggedIn',(done)=>{
        chai.request(app)
            .post('/login')
            .send({"userEmail":"shyamkondisetty","password":"shyam123"})
            .end((error,response)=>{
                assert.isObject(response);
                assert.equal(false,response.body.status)
            })
        done();
    })

    it('giveninValidPassword_whenLoggedIn_thenItShouldNotBeLoggedIn',(done)=>{
        chai.request(app)
            .post('/login')
            .send({"userEmail":"shyamkondisetty@gmail.com","password":"sh"})
            .end((error,response)=>{
                assert.isObject(response);
                assert.equal(false,response.body.status)
            })
        done();
    })
})
