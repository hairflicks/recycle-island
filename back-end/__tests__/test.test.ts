import { seed } from "../db/seeds/seed";
import { testitems } from "../db/data/test/items";
import { testusers } from "../db/data/test/users";
import supertest from 'supertest'
import { db } from "../db/connection";
import mongoose from "mongoose";

beforeEach(async () => {
    await db
    await seed(testusers,testitems)
})
afterAll(async () => {
    mongoose.connection.close()
});

describe('',() => {
    test('',() => {
       expect(2).toBe(3)
    }),
    test('',() => {
        expect(5).toBe(3)
     })
})