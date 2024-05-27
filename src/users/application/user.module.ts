import { GetUsersUseCase } from '../domain';
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
      provide: GetUsersUseCase,
      useFactory: (userService: UserService) => new GetUsersUseCase(userService),
      inject: [UserServiceImpl],
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
})
export class UserModule {}
