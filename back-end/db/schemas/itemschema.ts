import mongoose, { Schema, model, SchemaType } from 'mongoose';

const itemSchema = new Schema({
    itemName: { type: String, required: true },
    itemPicture: { type: String, required: true },
    itemCost: Number,
    itemDescription: { type: String, required: true },
});

export const Item = model('Item', itemSchema);