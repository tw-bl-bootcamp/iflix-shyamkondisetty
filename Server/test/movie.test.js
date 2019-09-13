const chai = require('chai')
const chaiHttp = require('chai-http');
const app = require('../server')
const assert = chai.assert;
chai.use(chaiHttp);
describe('/getAllMovies', () => {
    it('given_whenGetAllMovieList_thenItShouldReturnMovieList', (done) => {
        chai.request(app)
            .get('/getAllMovies')
            .end((error, response) => {
                console.log("response.body.status",response.body.status);
                
                assert.equal(true, response.body.status)
            })
        done();
    })
})