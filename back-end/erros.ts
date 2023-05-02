export const handleInvalidPath = (req: any, res: any)=> {
  res.status(404).send({message: '404: not found.'})
}