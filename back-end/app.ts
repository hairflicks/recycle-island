import express from "express";
import { getItems } from "./controllers/itemControllers";
import {
  getUserByUsername,
  postUser,
  patchItemToInventoryByUsername,
  patchItemToIsland,
  patchCreditsByUsername,
  deleteUserByUsername,
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
app.patch("/api/users/:username/inventory", patchItemToInventoryByUsername);
app.patch("/api/users/:username/island", patchItemToIsland);
app.patch("/api/users/:username/credits", patchCreditsByUsername)
app.delete("/api/users/:username", deleteUserByUsername)

app.use(handleInvalidPath);
app.use(handleCustomErrors);
app.use(handleMongooseErrors);
