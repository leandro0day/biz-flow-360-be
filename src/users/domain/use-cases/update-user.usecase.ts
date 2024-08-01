import { UpdateUserDto } from 'src/users/application/dto/user.dto';
import { UserService } from '../domain-services';

export class UpdateUserUseCase {
  constructor(private readonly userService: UserService) {}

  async updateUser(id: string, user: UpdateUserDto) {
    try {
      return this.userService.updateUser(id, user);
    } catch (error) {
      console.log(error);
    }
  }
}
