import axios, {AxiosError, AxiosResponse} from 'axios';
import { Error } from 'mongoose';

const recycleLand = axios.create({
    baseURL: 'https://recycland.onrender.com/api'
})

export const fetchAllItems = () => {
    return recycleLand.get(`/items`).then((response) => {
        return response.data.items;
    })
}

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
