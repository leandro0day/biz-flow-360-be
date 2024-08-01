import { CreateUserUseCase, DeleteUserUseCase, GetUserByIdUseCase, GetUsersUseCase, UpdateUserUseCase } from '../domain';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserController } from './user.controller';
import { UserMongoDBRepository, UserServiceImpl } from '../infrastructure';
import { UserRepository, UserService } from '../domain/domain-services';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: CreateUserUseCase,
      useFactory: (userService: UserService) => new CreateUserUseCase(userService),
      inject: [UserServiceImpl],
    },
    {
      provide: DeleteUserUseCase,
      useFactory: (userService: UserService) => new DeleteUserUseCase(userService),
      inject: [UserServiceImpl],
    },
    {
      provide: GetUserByIdUseCase,
      useFactory: (userService: UserService) => new GetUserByIdUseCase(userService),
      inject: [UserServiceImpl],
    },
    {
      provide: GetUsersUseCase,
      useFactory: (userService: UserService) => new GetUsersUseCase(userService),
      inject: [UserServiceImpl],
    },
    {
      provide: UpdateUserUseCase,
      useFactory: (userService: UserService) => new UpdateUserUseCase(userService),
      inject: [UserServiceImpl],
    },
    {
      provide: UserRepository,
      useFactory: (prismaService: PrismaService) => new UserMongoDBRepository(prismaService),
      inject: [PrismaService],
    },
    {
      provide: UserService,
      useFactory: (userRepository: UserRepository) => new UserServiceImpl(userRepository),
      inject: [UserMongoDBRepository],
    },

    {
      provide: UserMongoDBRepository,
      useFactory: (prismaService: PrismaService) => new UserMongoDBRepository(prismaService),
      inject: [PrismaService],
    },
    {
      provide: UserServiceImpl,
      useFactory: (userRepository: UserRepository) => new UserServiceImpl(userRepository),
      inject: [UserMongoDBRepository],
    },
  ],
  exports: [UserServiceImpl, UserRepository, UserMongoDBRepository],
})
export class UserModule {}
