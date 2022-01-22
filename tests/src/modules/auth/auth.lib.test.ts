import AuthLib from '../../../../src/modules/auth/auth.lib';
jest.mock('bcrypt');

beforeEach(() => {
  jest.setTimeout(100000);
});

describe('Auth Lib', () => {
  it('should called generateHash ', async () => {
    const authLib = new AuthLib();
    const passString = 'abc';
    const returnValue = `hashed-${passString}`;
    const rs = await authLib.generateHash(passString);
    expect(rs).toBe(returnValue);
  });
});

afterEach(() => {
  jest.clearAllTimers();
});
