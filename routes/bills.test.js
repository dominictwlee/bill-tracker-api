const request = require('supertest'); // eslint-disable-line
const app = require('../server');

describe('POST api/bills', () => {
  const bill = 'stuff';
  test('It should return a 200 JSON response', done => {
    request(app)
      .post('/api/bills')
      .send({ bill })
      .expect(200)
      .end(err => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
