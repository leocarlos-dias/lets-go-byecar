export interface ISignInUseCase {
  authenticate(email: string, password: string): Promise<String | Error>;
}