import express from 'express'
import { getItems } from './controllers/itemControllers';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json());

app.get(`/api/items`, getItems);

