import { Application, NextFunction, Request, Response } from 'express';
// import {
//   ReasonPhrases,
//   StatusCodes
// } from 'http-status-codes';
import * as responsehandler from '../../lib/response-handler';
// import ApiError from '../../abstractions/ApiError';
import BaseApi from '../BaseApi';
import AuthLib from './auth.lib';

/**
 * Status controller
 */
export default class AuthController extends BaseApi {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(express: Application): void {
    express.use('/api/auth', this.router);
    this.router.post('/login', this.login);
    this.router.post('/signup', this.signup);
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userLib = new AuthLib();
      const { email, password } = req.body;
      if (email !== '' && password !== '') {
        const loggedInUser: any = await userLib.loginUserAndCreateToken(email, password);
        // res.locals.data = loggedInUser;
        // responsehandler.send(res);
        res.json(loggedInUser);
      } else {
        throw Error('Not valid credentials');
      }
    } catch (err) {
      next(err);
    }
  }

  public async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userLib = new AuthLib();
      const userResult = await userLib.saveUser(req.body);
      userResult.password = undefined;
      res.locals.data = userResult;
      responsehandler.send(res);
    } catch (err) {
      next(err);
    }
  }
}
