import {db} from '../connection'
import { InsertManyOptions, MongooseError } from 'mongoose'
import { User } from '../schemas/userschema'
import { Item } from '../schemas/itemschema'
import { users } from '../data/test/users'

const seed = async (items: [], users: [{}]) => {
    await db

    const result = await User.insertMany(items)
    console.log(result)
}

seed([], users)