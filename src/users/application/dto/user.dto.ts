import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: '+1234567890', description: 'The phone number of the user' })
  @IsString()
  phone: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'active', description: 'The status of the user' })
  @IsString()
  status: string;

  @ApiProperty({ example: 'admin', description: 'The role of the user' })
  @IsString()
  rol: string;

  @ApiProperty({ example: 'password123', description: 'The password of the user' })
  @IsString()
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
