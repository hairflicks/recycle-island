import mongoose, { Schema, model, SchemaType } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true, index: { unique: true }, maxLength: 20 },
  hash: { type: String, required: true },
  credits: { type: Number, default: 0 },
  inventory: { type: Object, default: {} },
  island: {
    type: [
      {
        itemName: String,
        coordinates: [Number],
      },
    ],
    default: [],
  },
});

userSchema.index({ username: 1 }, { unique: true });

export const User = model("User", userSchema);
