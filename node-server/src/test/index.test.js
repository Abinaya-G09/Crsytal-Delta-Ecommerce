import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();

//checking a status
describe('Checking Status of API', () => {
  it('Home page', (done) => {
    chai.request(app)
      .get('/')
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
