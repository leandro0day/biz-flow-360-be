import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '../domain';
import { UserRepository } from '../domain/domain-services';
import { UpdateUserDto } from '../application/dto/user.dto';

export class UserMongoDBRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  public async createUser(user: User): Promise<User> {
    return await this.prismaService.users.create({ data: user });
  }

  public async deleteUser(id: string): Promise<User> {
    return await this.prismaService.users.delete({ where: { id } });
  }

  public async getUsers(): Promise<User[]> {
    return await this.prismaService.users.findMany();
  }

  public async getUserById(id: string): Promise<User> {
    return await this.prismaService.users.findUnique({ where: { id } });
  }

  public async updateUser(id: string, user: UpdateUserDto): Promise<User> {
    return await this.prismaService.users.update({ where: { id: id }, data: user });
  }
}
