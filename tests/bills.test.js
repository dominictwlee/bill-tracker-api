const request = require('supertest');
const expect = require('expect');

const { populateBills, testObjId } = require('./seed');
const app = require('../server');

beforeEach(populateBills);
const stringId = testObjId.toHexString();

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
        expect(res.body).toHaveLength(3);
      })
      .end(done);
  });
});

describe('PATCH /api/bills/:id', () => {
  console.log(stringId);
  it('should return an updated item', done => {
    request(app)
      .patch(`/api/bills/${stringId}`)
      .send({ bill: 'testBill' })
      .expect(200)
      .end(done);
  });
});

describe('DELETE /api/bills/:id', () => {
  console.log(stringId);
  it('should return value of item deleted', done => {
    request(app)
      .delete(`/api/bills/${stringId}`)
      .expect(200)
      .end(done);
  });
});
