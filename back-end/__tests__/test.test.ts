import { seed } from "../db/seeds/seed";
import { testitems } from "../db/data/test/items";
import { testusers } from "../db/data/test/users";
import request from 'supertest';
import { db } from '../db/connection';
import mongoose from 'mongoose';
import { app } from '../app';

beforeEach(async () => {
	await db;
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
	});