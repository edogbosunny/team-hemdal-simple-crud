import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../index';

chai.use(chaiHttp);

describe('Test for creating a new Todo', () => {
  it('should return 201 for a successfully creating a Todo', (done) => {
    const data = {
      title: 'Test Title',
    };
    chai
      .request(app)
      .post('/api/v1/todo')
      .send(data)
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
