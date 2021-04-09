import { Request, Response } from 'express-serve-static-core';

const apiErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  message: string = 'Bad Request'
) => {
  return res.status(400).send({ Message: message });
};

export { apiErrorHandler };
