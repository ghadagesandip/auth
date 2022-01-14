export default class AuthLib {
  public async loginUserAndCreateToken(email: string, password: string) {
    console.log('mock called');
    return jest.fn().mockReturnValue({ userData: {}, token: 'ad' });
  }
}
