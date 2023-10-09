import { IJwtService } from "../../../infrastructure/services/jwt-service-interface";
import { SignInUseCase } from "./sign-in-usecase";

describe('SignInUseCase', () => {
  let signInUseCase: SignInUseCase;
  let jwtService: IJwtService;

  beforeEach(() => {
    jwtService = {
      sign: jest.fn().mockReturnValue('test-token'),
      verify: jest.fn()
    };

    signInUseCase = new SignInUseCase(jwtService);
    process.env.SECRET_KEY = 'test-secret';
  });

  describe('authenticate', () => {
    it('should return a token if email and password are valid', async () => {
      const email = "example@email.com";
      const password = "example.password";
      const token = await signInUseCase.authenticate(email, password);

      expect(token).toEqual('test-token');
      expect(jwtService.sign).toHaveBeenCalledWith({ email }, undefined, { expiresIn: '1h' });
    });

    it('should throw an error if email or password is invalid', async () => {
      const email = "invalid@example.com";
      const password = "invalid.password";
      
      await expect(signInUseCase.authenticate(email, password)).rejects.toThrow('Invalid email or password');
    });
  });
});
