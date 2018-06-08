const request = require('supertest');
const expect = require('expect');

const populateBills = require('./seed');
const app = require('../server');

before(populateBills);

describe('POST /api/bills', () => {
  it('should return POST result', done => {
    request(app)
      .post('/api/bills')
      .send({ bill: 'Electricity', cost: 50 })
      .expect(200)
      .end(done);
  });
});

describe('GET /api/bills', () => {
  it('should return an array of bill items', done => {
    request(app)
      .get('/api/bills')
      .expect(200)
      .expect(res => {
        expect(res.body).toHaveLength(4);
      })
      .end(done);
  });
});
