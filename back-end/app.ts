import express from 'express'
import { getItems } from './controllers/itemControllers';

export const app = express();

app.use(express.json());

app.get(`/api/items`, getItems);

