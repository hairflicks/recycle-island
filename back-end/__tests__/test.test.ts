import { seed } from "../db/seeds/seed";
import { testitems } from "../db/data/test/items";
import { testusers } from "../db/data/test/users";
import supertest from 'supertest'

//  const seednow = async() => {
//      await seed(testusers, testitems)
//  }

//  seednow()

describe('',() => {
    test('',() => {
       seed(testusers, testitems)
    })
})