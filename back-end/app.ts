import express from 'express'
import { getItems } from './controllers/itemControllers';
import cors from 'cors';
import { handleInvalidPath } from './errors';

export const app = express();

app.use(cors());
app.use(express.json());

app.get(`/api/items`, getItems);

app.use(handleInvalidPath);

