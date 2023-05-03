import mongoose from "mongoose";
import { Item } from "../db/schemas/itemschema";
import { db } from "../db/connection";
import { User } from "../db/schemas/userschema";

export const findItems = async () => {
  await db;
	const data = await Item.find({});
	return data;
};

export const addItemToInventory = async (username: String, body: {name: String}) => {
	await db;
	console.log(body);
	const item = body.name;
	const data = await User.findOneAndUpdate(
	  { username },
	  { $inc: { [`inventory.${item}`] : 1 }},
	  { new: true }
	);
	return data;
  };
  