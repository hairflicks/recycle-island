import {db} from '../connection'
import { InsertManyOptions, MongooseError, InferSchemaType} from 'mongoose'
import { User} from '../schemas/userschema'
import { Item } from '../schemas/itemschema'

export const seed = async (users: any, items: any) => {
    await db
    await User.collection.drop()
    await Item.collection.drop()
    const insertedUsers = await User.insertMany(users)

    const insertedItems = await Item.insertMany(items)
    console.log(insertedUsers)
    console.log(insertedItems)
}
