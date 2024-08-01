import { UpdateUserDto } from 'src/users/application/dto/user.dto';
import { User } from '../models/user.models';

export abstract class UserRepository {
  public abstract createUser(user: User): Promise<User>;
  public abstract deleteUser(id: string): Promise<User>;
  public abstract getUserById(id: string): Promise<User>;
  public abstract getUsers(): Promise<User[]>;
  public abstract updateUser(id: string, user: UpdateUserDto): Promise<User>;
}
