import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    return res.status(400).send({ errors: [err.message] });
  }
  //TODO Logging
  console.log(`[Error:][${err}]`);
  return res
    .status(400)
    .send({ errors: [{ message: `Something Went Wrong.` }] });
};
