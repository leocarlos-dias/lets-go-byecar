import { JwtService } from './jwt-service';
import jwt from 'jsonwebtoken';

// Mocking the 'jsonwebtoken' module
jest.mock('jsonwebtoken');

describe('JwtService', () => {
  let service: JwtService;
  const secret = 'test-secret';

  beforeEach(() => {
    service = new JwtService();
    (jwt.sign as jest.Mock).mockClear();
    (jwt.verify as jest.Mock).mockClear();
  });

  describe('sign', () => {
    it('should call jwt.sign with the correct parameters', () => {
      const payload = { user: 'test' };
      const options = { expiresIn: '1h' };

      service.sign(payload, secret, options);

      expect(jwt.sign).toHaveBeenCalledWith(payload, secret, options);
    });

    it('should return the token from jwt.sign', () => {
      (jwt.sign as jest.Mock).mockReturnValue('mockToken');
      const result = service.sign({}, secret);
      expect(result).toBe('mockToken');
    });
  });

  describe('verify', () => {
    it('should call jwt.verify with the correct parameters', () => {
      const token = 'test-token';

      service.verify(token, secret);

      expect(jwt.verify).toHaveBeenCalledWith(token, secret);
    });

    it('should return the decoded token from jwt.verify', () => {
      const decodedToken = { user: 'test' };
      (jwt.verify as jest.Mock).mockReturnValue(decodedToken);
      const result = service.verify('mockToken', secret);
      expect(result).toEqual(decodedToken);
    });
  });
});
