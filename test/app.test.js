const request = require('supertest');
const app = require('../server');

describe('GET /api/hello', () => {
  it('should return JSON with a hello message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from Express!' });
  });
});
