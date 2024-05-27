import { User } from '../models/user.models';

export abstract class UserService {
  public abstract getUsers(): Promise<User[]>;
}
