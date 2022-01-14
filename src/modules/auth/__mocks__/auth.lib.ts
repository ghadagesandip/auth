export default class AuthLib {
  public async loginUserAndCreateToken(email: string, password: string) {
    return jest.fn().mockReturnValue({ userData: {}, token: 'ad' });
  }
}
