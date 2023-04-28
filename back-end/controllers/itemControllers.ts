import { findItems } from "../models/itemModels";

export const getItems = async (req: any, res: any, next: any) => {
  try {
    const data = await findItems();
    return res.status(200).send({items: data});
  } catch (err){
    next(err)
  }
}