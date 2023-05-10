import axios, {AxiosError, AxiosResponse} from 'axios';
import { Error } from 'mongoose';

const recycleLand = axios.create({
    baseURL: 'https://recycland.onrender.com/api'
})

export const fetchAllItems = async () => {
	const itemData = await recycleLand.get(`/items`);
	return itemData.data.items;
};

export const postUser = async (name: String, username: String, password: String) => {
  const userToPost = {
    name, username, hash: password
  }
  const data = await recycleLand.post(`/users`, userToPost)
  return data
}

type userObject = {
  name: String,
  username: String,
  hash: String
}

export const getUserByUsername = async (username: String) => {
  const data = await recycleLand.get(`/users/${username}`);
  return data;
};

export const patchCreditsByUsername = async (username: String, credits: Number) => {
  const data = await recycleLand.patch(`/users/${username}/credits`, {credits})
  return data
}

export const patchInventoryByUsername = async (username: String, name: String) => {
  const data = await recycleLand.patch(`/users/${username}/inventory`, {name})
  return data
}

export const deleteUserByUsername = async (username: String) => {
  const data = await recycleLand.delete(`/users/${username}`)
  return data
}

export const patchIslandByUsername = async (username: String, itemObject: Object) => {
  const data = await recycleLand.patch(`/users/${username}/island`, {itemName: itemObject.itemName, coordinates: itemObject.coordinates})
  return data
}