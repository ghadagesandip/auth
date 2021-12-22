/* eslint-disable no-new */
import * as express from 'express';
import AuthController from './modules/auth/auth.controller';

export default function registerRoutes(app: express.Application): void {
  new AuthController(app);
}
