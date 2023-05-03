import bcrypt from "bcryptjs";
import { items } from "./data/production/items";

export const hashPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

export const checkShopItemExists = (itemName: string): void  => {
  let result = false
  Object.values(items).forEach(item => {
    if (itemName === item.itemName) {
      result = true
    }
  })
  if (!result) {
    throw { status: 400, message: "400: Item does not exist." }
  }
}
