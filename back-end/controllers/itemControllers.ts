import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { findItems, findUserByUsername } from "../models/itemModels";

export const getItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await findItems();
    return res.status(200).send({items: data});
  } catch (err){
    next(err)
  }
}

export const getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
  const {username} = req.params; 
  const data = await findUserByUsername(username);
  return res.status(200).send({user: data});
}