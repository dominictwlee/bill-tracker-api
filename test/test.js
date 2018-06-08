const request = require('supertest'); // eslint-disable-line
const app = require('../server');

describe('GET /', () => {
  it('should return hello world', done => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});

describe('POST /api/bills', () => {
  it('should return POST result', done => {
    request(app)
      .post('/api/bills')
      .send({ bill: 'Electricity', cost: 50 })
      .expect(200)
      .end(done);
  });
});
