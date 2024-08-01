import { UpdateUserDto } from '../application/dto/user.dto';
import { User } from '../domain';
import { UserRepository, UserService } from '../domain/domain-services';

export class UserServiceImpl implements UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser(user: User) {
    return this.userRepository.createUser(user);
  }

  public async deleteUser(id: string) {
    return this.userRepository.deleteUser(id);
  }

  public async getUsers() {
    return this.userRepository.getUsers();
  }

  public async getUserById(id: string) {
    return this.userRepository.getUserById(id);
  }

  public async updateUser(id: string, user: UpdateUserDto) {
    return this.userRepository.updateUser(id, user);
  }
}
