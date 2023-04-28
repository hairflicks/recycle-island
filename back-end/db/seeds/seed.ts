import {db} from '../connection'
import mongoose, { InsertManyOptions, MongooseError, InferSchemaType} from 'mongoose'
import { User} from '../schemas/userschema'
import { Item } from '../schemas/itemschema'

export const seed = async (users: any, items: any) => {

    if (mongoose.connection.collections["User"]) {
    await User.collection.drop()
    }

    await Item.collection.drop()
    const insertedUsers = await User.insertMany(users)

    const insertedItems = await Item.insertMany(items)
    console.log('hello')
}
