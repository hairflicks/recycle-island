import express from 'express'
import { getItems, getUserByUsername } from './controllers/itemControllers';
import cors from 'cors';
import { handleCustomErrors, handleInvalidPath } from './errors';

export const app = express();

app.use(cors());
app.use(express.json());

app.get(`/api/items`, getItems);
app.get('/api/users/:username', getUserByUsername)

app.use(handleInvalidPath);
app.use(handleCustomErrors);

