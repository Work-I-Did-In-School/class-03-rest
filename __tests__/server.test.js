'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');

const request = supertest(server.app);


describe('testing the server', () => {

  test('testing a 200 for GET `/food`', async () => {

    const response = await request.get('/food');

    expect(response.status).toEqual(200);
  });

   test('testing a 200 for POST `/food`', async () => {

    const response = await request.post('/food');

    expect(response.status).toEqual(200);
  });

   test('testing a 200 for PUT `/food`', async () => {

    const response = await request.put('/food');

    expect(response.status).toEqual(200);
  });

   test('testing a 200 for DELET `/food`', async () => {

    const response = await request.delete('/food');

    expect(response.status).toEqual(200);
  });
});
