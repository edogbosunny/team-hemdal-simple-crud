import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../index';

chai.use(chaiHttp);

describe('Test for making a post request to the Todoitem route', () => {
  describe('Test to create Todo item', () => {
    it('should return 201 for a successfully creating a TodoItem', (done) => {
      const data = {
        content: 'Running the Test value',
      };
      chai
        .request(app)
        .post('/api/todos/1/items')
        .send(data)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
});
