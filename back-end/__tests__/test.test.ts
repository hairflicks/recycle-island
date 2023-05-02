import { seed } from "../db/seeds/seed";
import { testitems } from "../db/data/test/items";
import { testusers } from "../db/data/test/users";
import request from 'supertest';
import { db } from '../db/connection';
import mongoose from 'mongoose';
import { app } from '../app';

beforeEach(async () => {
	await seed(testusers, testitems);
});
afterAll(async () => {
	mongoose.connection.close();
});
  
  describe('GET /items', () => {

		test('responds with an array of item objects', () => {
			return request(app)
				.get('/api/items')
				.expect(200)
				.then(({ body }) => {
					const { items } = body;
					expect(items.length).toBe(3);
					items.forEach((item: Object) => {
						expect(item instanceof Object).toBe(true);
						expect(item).toMatchObject({
							_id: expect.any(String),
							itemName: expect.any(String),
							itemCost: expect.any(Number),
							itemDescription: expect.any(String),
							__v: expect.any(Number)
						});
					});
				});
		});

    test('404: responds with error code 404 bad request when user enters wrong endpoint', () => {
      return request(app).get('/api/ite').expect(404).then(({body}) => {
        const {message} = body;
        expect(message).toBe('404: not found.');
      })
    });  
	});


