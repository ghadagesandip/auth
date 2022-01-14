import express, { Request } from 'express';
import AuthController from '../../../../src/modules/auth/auth.controller';
import AuthLib from '../../../../src/modules/auth/auth.lib';

jest.mock('../../../../src/modules/auth/auth.lib');

beforeEach(() => {
  jest.useFakeTimers();
  jest.setTimeout(100000);
});

describe('Auth controller', () => {
  const app = express();
  const authController = new AuthController(app);
  it('should able to login ', async () => {
    const mReq: any = {
      body: {
        email: 'sandip.ghadg@test.com',
        password: 'check'
      }
    } as Request;
    const mRes: any = {
      locals: { data: '' },
      status: jest.fn(),
      send: jest.fn()
    };
    const mNext = jest.fn();
    await authController.login(mReq, mRes, mNext);
    const authlib = new AuthLib();
    expect(authlib.loginUserAndCreateToken).toBeCalled();
    expect(mNext).toBeCalled();
    expect(mRes).toHaveProperty('userData');
  }, 3000);

  it('login should be failed ', async () => {
    const mReq: any = {
      body: {
        email: 'sandip.ghadg@test.com',
        password: ''
      }
    };
    const mRes: any = {};
    const mNext = jest.fn();
    await authController.login(mReq, mRes, mNext);
    expect(mNext).toHaveBeenCalled();
  }, 3000);
});

afterEach(() => {
  jest.clearAllTimers();
});
