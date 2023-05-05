import axios from "axios";

const recycleLand = axios.create({
  baseURL: "https://recycland.onrender.com/api",
});

export const fetchAllItems = () => {
  return recycleLand.get(`/items`).then((response) => {
    return response.data.items;
  });
};
