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

export const addItemToIsland = async (
	username: String,
	body: { itemName: string; coordinates: [] }
) => {
	await db;
	const item = body;
	const data = await User.findOneAndUpdate(
		{ username },
		{ $push: { island: item } },
		{ new: true }
	);
	return data;
};

export const addCreditsToUser = async (
	username: String,
	body: { credits: number }
) => {
	await db;
	const item = body;
	const data = await User.findOneAndUpdate(
		{ username: username },
		{ $inc: { credits: item.credits } },
		{ new: true}
	);
	return data;
};

export const removeUser = async (username: String) => {
  await db;
  const deleted = await User.findOneAndDelete({username})
  if (!deleted) throw { status: 400, message: '400: username does not exist.' };
}

export const updateItemFromIsland = async (
	username: String,
	body: { itemName: String }
) => {
	await db;
	const { itemName } = body;
	let data = await findUserByUsername(username);
	let count = 0
	data.island.forEach((item, i) => {
		if (item.itemName === itemName && count < 1) {
			data.island.splice(i, 1)
			count++
		}
	});
	const updatedUser = await User.findOneAndUpdate(
		{ username },
		{ $set: { island: data.island } },
		{ new: true }
	);
	return updatedUser;
};