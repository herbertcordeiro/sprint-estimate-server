import { IsEnum, IsString, Length } from 'class-validator';
import { UserRole } from '@prisma/client';

export class CreateUserDTO {
  @IsString()
  @Length(1, 255)
  name: string;

  @IsEnum(UserRole)
  role: UserRole;
}
