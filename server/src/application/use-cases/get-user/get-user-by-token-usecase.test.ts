import { IHttpClient } from "../../../infrastructure/http/http-interface";
import { IJwtService } from "../../../infrastructure/services/jwt-service-interface";
import { GetUserByTokenUseCase } from "./get-user-by-token-usecase";

describe('GetUserByTokenUseCase', () => {
  let getUserByTokenUseCase: GetUserByTokenUseCase;
  let jwtService: IJwtService;
  let httpClient: IHttpClient;

  beforeEach(() => {
    jwtService = {
      sign: jest.fn(),
      verify: jest.fn()
    };

    httpClient = {
      get: jest.fn(),
      post: jest.fn()
    };

    getUserByTokenUseCase = new GetUserByTokenUseCase(httpClient, jwtService);
    process.env.SECRET_KEY = 'test-secret';
  });

  describe('get', () => {
    it('should successfully fetch a user', async () => {
      const token = "valid-token";
      const mockUserResponse = {
        status: 200,
        data: {
          results: [
            {
              name: {
                first: "John",
                last: "Doe"
              },
              email: "john.doe@email.com",
              cell: "(27) 6140-1516"
            }
          ]
        }
      };

      (jwtService.verify as jest.Mock).mockReturnValue({ email: "john.doe@email.com" });
      (httpClient.get as jest.Mock).mockResolvedValue(mockUserResponse);

      const user = await getUserByTokenUseCase.get(token);

      expect(user).toBeDefined();
      expect(user.email).toBe("john.doe@email.com");
    });

    it('should throw an error if token is invalid', async () => {
      const token = "invalid-token";

      (jwtService.verify as jest.Mock).mockReturnValue(null);

      await expect(getUserByTokenUseCase.get(token)).rejects.toThrow("Invalid token.");
    });

    it('should throw an error if fetching user data from API fails', async () => {
      const token = "valid-token";
      (jwtService.verify as jest.Mock).mockReturnValue({ email: "john.doe@email.com" });
      (httpClient.get as jest.Mock).mockResolvedValue({ status: 400 });

      await expect(getUserByTokenUseCase.get(token)).rejects.toThrow("Failed to fetch user data from API.");
    });
  });
});
