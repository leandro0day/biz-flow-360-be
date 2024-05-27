import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '../domain';
import { UserRepository } from '../domain/domain-services';

export class UserMongoDBRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  public async getUsers(): Promise<User[]> {
    return await this.prismaService.users.findMany();
  }
}
