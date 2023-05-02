import { NextFunction, Request, Response } from 'express';

type customError = { status: number; message: String };

export const handleCustomErrors = (
	error: customError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { status, message } = error;
	if (status && message) res.status(status).send({ message });
};

export const handleInvalidPath = (req: Request, res: Response): Response => {
	return res.status(404).send({ message: '404: not found.' });
};
