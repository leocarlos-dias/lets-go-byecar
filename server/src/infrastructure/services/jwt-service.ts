import { IJwtService } from './jwt-service-interface';
import jwt from 'jsonwebtoken';

export class JwtService implements IJwtService {
  sign(payload: Record<string, any>, secret: string, options?: Record<string, any>): string {
    return jwt.sign(payload, secret, options);
  }

  verify(token: string, secret: string): Record<string, any> {
    return jwt.verify(token, secret) as Record<string, any>;
  }
}
