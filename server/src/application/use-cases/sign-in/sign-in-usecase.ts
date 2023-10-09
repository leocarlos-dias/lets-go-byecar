import { User } from "../../../domain/entities/user-entity";
import { IJwtService } from "../../../infrastructure/services/jwt-service-interface";
import { ISignInUseCase } from "./sign-in-usecase-interface";

export class SignInUseCase implements ISignInUseCase {
  private readonly SECRET = process.env.SECRET_KEY as string;

  constructor(private readonly jwtService: IJwtService) { }

  async authenticate(email: string, password: string): Promise<string | Error> {

    const user = User.fromCredentials(email, password);
    
    if (!user.canLogin()) {
      throw new Error('Invalid email or password');
    }
    const token = this.jwtService.sign({ email }, this.SECRET, { expiresIn: '1h' });
    return token;
  }
}