import { UserService } from '../domain-services';

export class GetUserByIdUseCase {
  constructor(private readonly userService: UserService) {}

  async getUserById(id: string) {
    try {
      return this.userService.getUserById(id);
    } catch (error) {
      console.log(error);
    }
  }
}
