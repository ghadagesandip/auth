export default class AuthLib {
  public async loginUserAndCreateToken(email: string, password: string): Promise<any> {
    const resp = { userData: { email: email, first_name: 'Sandip' }, token: 'secret_token_goes_here' };
    return resp;
  }
}
