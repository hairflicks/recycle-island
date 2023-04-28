import mongoose, { Schema, model, SchemaType } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, required: true },
    hash: { type: String, required: true },
    noOfCredits: { type: Number, default: 0 },
    inventory: {type: [String], default: []},
    island: {type:  [
            {
                itemName: String,
                coordinates: [Float64Array],
            },
        ], default: [{}]}
});

export const User = model('User', userSchema);