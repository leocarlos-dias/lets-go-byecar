import { SignInUseCase } from "../../application/use-cases/sign-in/sign-in-usecase";

export class SignInController {
  constructor(private readonly authenticateUser: SignInUseCase) { }

  async handle(username: string, password: string): Promise<{ statusCode: number; body: any }> {
    try {
      const token = await this.authenticateUser.authenticate(username, password);
      return { statusCode: 200, body: { token } };
    } catch (error: any) {
      return { statusCode: 500, body: { error: error.message } };
    }
  }
}