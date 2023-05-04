import { NextFunction, Request, Response } from 'express';
import { MongoError } from 'mongodb';
import { Error, MongooseError } from 'mongoose';

type customError = { status: number; message: String };

export const handleCustomErrors = (
	error: customError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { status, message } = error;
	if (status && message) return res.status(status).send({ message });
	next(error)
};

export const handleMongooseErrors = (
	error: MongoError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
  if(error.code === 11000) {
    res.status(409).send({message: 'Username already exists. Please enter a different one...'})
  }
	if (error.name) {
		res.status(400).send({message: error.message})
	}
	next(error)
}

export const handleInvalidPath = (req: Request, res: Response): Response => {
	return res.status(404).send({ message: '404: not found.' });
};
