import { User } from "../../../domain/entities/user-entity";
import { IHttpClient } from "../../../infrastructure/http/http-interface";
import { IJwtService } from "../../../infrastructure/services/jwt-service-interface";
import { IGetUserByTokenUseCase } from "./get-user-by-token-usecase-interface";

interface IUserResponse {
  results: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    cell: string;
  }[];
}

export class GetUserByTokenUseCase implements IGetUserByTokenUseCase {
  constructor(
    private readonly httpClient: IHttpClient,
    private readonly jwtService: IJwtService,
  ) { }

  async get(token: string): Promise<User> {
    this.verifyToken(token);
   
    const response = await this.fetchUserFromAPI(token);
    console.log(response)
    const user = User.create(
      `${response.results[0].name.first} ${response.results[0].name.last}`,
      response.results[0].email,
      response.results[0].cell
    );
      console.log(user)
    return user;
  }

  private verifyToken(token: string): void {
    const decodedToken = this.jwtService.verify(token, String(process.env.SECRET_KEY));
    if (!decodedToken) {
      throw new Error("Invalid token.");
    }
  }

  private async fetchUserFromAPI(token: string): Promise<IUserResponse> {
    const response = await this.httpClient.get<IUserResponse>("https://randomuser.me/api/", token, { inc: "name,email,cell", nat: "br", results: 1 });

    if (response.status !== 200) {
      throw new Error("Failed to fetch user data from API.");
    }
 
    return response.data;
  }
}
