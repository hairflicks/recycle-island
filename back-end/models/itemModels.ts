import mongoose from "mongoose";
import { Item } from "../db/schemas/itemschema";
import { db } from "../db/connection";
import { User } from "../db/schemas/userschema";

export const findItems = async () => {
  await db;
  const data = await Item.find({});
  return data;
};
