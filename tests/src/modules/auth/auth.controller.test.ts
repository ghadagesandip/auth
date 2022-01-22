import express, { Request, Response } from 'express';
import AuthController from '../../../../src/modules/auth/auth.controller';

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
    let responseObj = {};
    const mRes: Partial<Response> = {
      json: jest.fn().mockImplementation((result) => {
        responseObj = result;
      })
    };
    const mNext = jest.fn();
    const expectedResponse = {
      userData: { email: 'sandip.ghadg@test.com', first_name: 'Sandip' },
      token: 'secret_token_goes_here'
    };
    await authController.login(mReq as Request, mRes as Response, mNext);
    // expect(mNext).toBeCalled();
    expect(responseObj).toHaveProperty('userData');
    expect(responseObj).toEqual(expectedResponse);
  });

  // it('login should be failed ', async () => {
  //   const mReq: any = {
  //     body: {
  //       email: 'sandip.ghadg@test.com',
  //       password: ''
  //     }
  //   };
  //   const mRes: any = {};
  //   const mNext = jest.fn();
  //   await authController.login(mReq, mRes, mNext);
  //   expect(mNext).toBeCalled();
  // });
});

afterEach(() => {
  jest.clearAllTimers();
});
