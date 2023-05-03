import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { checkShopItemExists } from "../db/utils";
import { findItems, addItemToInventory} from "../models/itemModels";

export const getItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await findItems();
    return res.status(200).send({items: data});
  } catch (err){
    next(err)
  }
}

export const postItemToInventoryByUsername = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.params;
  const { body } = req;
  try {
    checkShopItemExists(body.name)
    const data = await addItemToInventory(username, body);
    if (!data) throw { status: 400, message: "400: username does not exist." };
    return res.status(200).send({ user: data });
  } catch (err) {
    next(err);
  }
};
