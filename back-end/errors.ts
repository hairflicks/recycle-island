import { Request, Response } from "express"


export const handleInvalidPath = (req: Request, res: Response): Response => {
  return res.status(404).send({message: '404: not found.'})
}