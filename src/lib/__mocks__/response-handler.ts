import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

function send(res: Response): void {
  let obj = {};
  obj = res.locals.data;
  res.send(obj);
  res.status(StatusCodes.OK);
}

function json(res: Response): void {
  let obj = {};
  obj = res.locals.data;
  // logger.info(JSON.stringify(obj, null, 2));
  res.status(StatusCodes.OK).json(obj);
}

export { send, json };
