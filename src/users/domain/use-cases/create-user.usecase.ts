import { UserService } from '../domain-services';

export class CreateUserUseCase {
  constructor(private readonly userService: UserService) {}

  async createUser(user: any) {
    try {
      return this.userService.createUser(user);
    } catch (error) {
      console.log(error);
    }
  }
}
