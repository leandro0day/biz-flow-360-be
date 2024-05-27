import { UserService } from '../domain-services';

export class GetUsersUseCase {
  constructor(private readonly userService: UserService) {}

  async getUsers() {
    try {
      return this.userService.getUsers();
    } catch (error) {
      console.log(error);
    }
  }
}
