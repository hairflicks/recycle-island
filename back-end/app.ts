import express from "express";
import { getItems, postItemToInventoryByUsername } from "./controllers/itemControllers";
import {
  getUserByUsername,
  postUser,
} from "./controllers/userControllers";
import cors from "cors";
import {
  handleCustomErrors,
  handleInvalidPath,
  handleMongooseErrors,
} from "./errors";

export const app = express();

app.use(cors());
app.use(express.json());

app.get(`/api/items`, getItems);
app.get("/api/users/:username", getUserByUsername);
app.post("/api/users", postUser);
app.patch("/api/users/:username/inventory", postItemToInventoryByUsername);

app.use(handleInvalidPath);
app.use(handleCustomErrors);
app.use(handleMongooseErrors);
