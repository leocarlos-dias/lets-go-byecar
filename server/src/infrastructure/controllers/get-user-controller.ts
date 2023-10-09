import { GetUserByTokenUseCase } from "../../application/use-cases/get-user/get-user-by-token-usecase";

export class GetUserController {
  constructor(private readonly getUserByTokenUseCase: GetUserByTokenUseCase) {}

  async handle(token: string): Promise<{ statusCode: number, body: any }> {
    try {
      const user = await this.getUserByTokenUseCase.get(token);
      return { statusCode: 200, body: user };
    } catch (error: any) {
      return { statusCode: 500, body: error.message };
    }
  }
}
