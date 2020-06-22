/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../../src/app';

const request = supertest(app);

describe('Our application root', () => {
  it('should response the GET method to introduce', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });
});
