import axios from 'axios';

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
