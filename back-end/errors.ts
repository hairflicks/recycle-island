import { NextFunction, Request, Response } from 'express';
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
	error: MongooseError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (error.name === 'ValidationError') {
		res.status(400).send({message: error.message})
	}
	next(error)
}

export const handleInvalidPath = (req: Request, res: Response): Response => {
	return res.status(404).send({ message: '404: not found.' });
};
