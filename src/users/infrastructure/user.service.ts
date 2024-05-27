import { UserRepository, UserService } from '../domain/domain-services';

export class UserServiceImpl implements UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async getUsers() {
    return this.userRepository.getUsers();
  }
}
