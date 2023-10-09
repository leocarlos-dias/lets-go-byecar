export interface IJwtService {
  sign(payload: Record<string, any>, secret: string, options?: Record<string, any>): string;
  verify(token: string, secret: string): Record<string, any>;
}
