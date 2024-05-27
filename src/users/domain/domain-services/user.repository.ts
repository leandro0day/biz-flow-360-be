import { User } from '../models/user.models';

export abstract class UserRepository {
  public abstract getUsers(): Promise<User[]>;
}
