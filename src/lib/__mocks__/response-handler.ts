import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

function send(res: Response): void {
  const resa = jest.fn().mockResolvedValue({
    status: jest.fn().mockReturnValue(200),
    send: jest.fn().mockReturnValue({})
  });
  return resa;
}

function json(res: Response): void {
  let obj = {};
  obj = res.locals.data;
  // logger.info(JSON.stringify(obj, null, 2));
  res.status(StatusCodes.OK).json(obj);
}

export { send, json };
