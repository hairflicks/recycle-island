import {db} from '../connection'
import { InsertManyOptions, MongooseError, InferSchemaType} from 'mongoose'
import { User} from '../schemas/userschema'
import { Item } from '../schemas/itemschema'
import { users } from '../data/test/users'
import { items } from '../data/test/items'

const seed = async (users: any) => {
    await db

    const result = await User.insertMany(users)

    const insertedItems = await Item.insertMany(items)
    console.log(result)
    console.log(insertedItems)
}

seed(users)