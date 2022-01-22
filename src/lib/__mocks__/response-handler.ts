import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

function send(res: Response): void {
  let obj = {};
  obj = res.locals.data;
  res.send(obj);
}

function json(res: Response): void {
  let obj = {};
  obj = res.locals.data;
  res.status(StatusCodes.OK).json(obj);
}

export { send, json };
