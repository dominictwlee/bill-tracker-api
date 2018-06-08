const request = require('supertest'); // eslint-disable-line
const app = require('../server');

describe('GET /', () => {
  test('should return hello world', done => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});

describe('POST /api/bills', () => {
  test('should return POST result', done => {
    request(app)
      .post('/api/bills')
      .expect(200)
      .end(done);
  });
});
