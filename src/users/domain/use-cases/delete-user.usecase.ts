import { UserService } from '../domain-services';

export class DeleteUserUseCase {
  constructor(private readonly userService: UserService) {}

  async deleteUser(id: string) {
    try {
      return this.userService.deleteUser(id);
    } catch (error) {
      console.log(error);
    }
  }
}
