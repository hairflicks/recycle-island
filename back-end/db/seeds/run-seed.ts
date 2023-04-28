import { seed } from './seed'
import { items } from '../data/production/items'
import { users } from '../data/production/users'
import { db } from '../connection'
import mongoose from 'mongoose'

const runseed = async () => {
    await db
    await seed(users,items)
    await mongoose.connection.close()
}

runseed()