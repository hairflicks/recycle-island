import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { findItems } from "../models/itemModels";

export const getItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await findItems();
    return res.status(200).send({items: data});
  } catch (err){
    next(err)
  }
}