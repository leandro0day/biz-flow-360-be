import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { CreateUserUseCase, DeleteUserUseCase, GetUserByIdUseCase, GetUsersUseCase, UpdateUserUseCase } from '../domain';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
    private getUserByIdUseCase: GetUserByIdUseCase,
    private getUsersUseCase: GetUsersUseCase,
    private updateUserUseCase: UpdateUserUseCase,
  ) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async createUser(@Body() user: CreateUserDto) {
    return this.createUserUseCase.createUser(user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by id' })
  @ApiResponse({ status: 200, description: 'The user has been successfully deleted.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async deleteUser(@Param('id') id: string) {
    return this.deleteUserUseCase.deleteUser(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiResponse({ status: 200, description: 'The user has been successfully retrieved.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async getUserById(@Param('id') id: string) {
    return this.getUserByIdUseCase.getUserById(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'The users have been successfully retrieved.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async getUsers() {
    return this.getUsersUseCase.getUsers();
  }

  @Put(':id')
  @ApiBody({ type: UpdateUserDto })
  @ApiOperation({ summary: 'Update a user by id' })
  @ApiResponse({ status: 200, description: 'The user has been successfully updated.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  public async updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.updateUserUseCase.updateUser(id, user);
  }
}
