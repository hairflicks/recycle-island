import mongoose from "mongoose";
import { db } from "../db/connection";
import { User } from "../db/schemas/userschema";

export const findUserByUsername = async (username: String) => {
  await db;
  const data = await User.find({ username });
  return data[0];
};

export const addUser = async (user: Object) => {
  await db;
  const data = await User.create(user);
  return data;
};

export const addItemToInventory = async (
  username: String,
  body: { name: String }
) => {
  await db;
  const item = body.name;
  const data = await User.findOneAndUpdate(
    { username },
    { $inc: { [`inventory.${item}`]: 1 } },
    { new: true }
  );
  return data;
};

export const addItemToIsland = async (username: String, body: {}) => {
  await db;
  const item = body;
  const data = await User.findOneAndUpdate(
    { username },
    { $push: { island: item } },
    { new: true }
  );
  return data;
};
