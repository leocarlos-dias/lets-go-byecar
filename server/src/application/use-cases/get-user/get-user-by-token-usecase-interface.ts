import { User } from "../../../domain/entities/user-entity";

export interface IGetUserByTokenUseCase {
  get(token: string): Promise<User | Error>;
}