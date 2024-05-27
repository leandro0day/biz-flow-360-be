import { Controller, Get } from '@nestjs/common';
import { GetUsersUseCase } from '../domain';

@Controller('user')
export class UserController {
  constructor(private getUsersUseCase: GetUsersUseCase) {}

  @Get()
  public async getUsers() {
    return this.getUsersUseCase.getUsers();
  }
}
