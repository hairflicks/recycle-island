import {
  findUserByUsername,
  addUser,
  addItemToInventory,
  addItemToIsland,
  addCreditsToUser,
  removeUser,
} from "../models/userModels";
import { Request, Response, NextFunction } from "express";
import { hashPassword, checkShopItemExists } from "../db/utils";

export const getUserByUsername = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.params;
  try {
    const data = await findUserByUsername(username);
    if (!data) throw { status: 400, message: "400: username does not exist." };
    return res.status(200).send({ user: data });
  } catch (err) {
    next(err);
  }
};

export const postUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const postedUser = req.body;
  console.log(postedUser, 'postedUserOBject before')
  postedUser.hash = hashPassword(postedUser.hash);
  console.log(postedUser, 'postedUserOBject after')
  try {
    const data = await addUser(postedUser);
    return res.status(200).send(data);
  } catch (err) {
    next(err);
  }
};

export const patchItemToInventoryByUsername = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.params;
  const { body } = req;
  try {
    checkShopItemExists(body.name);
    const data = await addItemToInventory(username, body);
    if (!data) throw { status: 400, message: "400: username does not exist." };
    return res.status(200).send({ user: data });
  } catch (err) {
    next(err);
  }
};

export const patchItemToIsland = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.params;
  const { body } = req;
  try {
    checkShopItemExists(body.itemName);
    const data = await addItemToIsland(username, body);
    if (!data) throw { status: 400, message: "400: username does not exist." };
    return res.status(200).send({ user: data });
  } catch (err) {
    next(err);
  }
};

export const patchCreditsByUsername = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { username } = req.params;
	const { body } = req;
	try {
		const data = await addCreditsToUser(username, body);
		if (!data) throw { status: 400, message: '400: username does not exist.' };
		return res.status(200).send({ user: data });
	} catch (err) {
		next(err);
	}
};

export const deleteUserByUsername = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
  const {username} = req.params;
  try {
    await removeUser(username)
    return res.status(204)
  } catch (err) {
    next(err)
  }
}