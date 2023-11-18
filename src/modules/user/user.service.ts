import { Injectable } from '@nestjs/common';
import { UserRole } from '@prisma/client';

import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ValidationService } from 'src/common/validate.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly validationService: ValidationService,
  ) {}

  async create({ name, role }: CreateUserDTO) {
    return this.prisma.user.create({
      data: { name, role: role as unknown as UserRole },
    });
  }

  async getAll() {
    return this.prisma.user.findMany();
  }

  async getOne(id: number) {
    await this.validationService.validateEntityExists('user', id);
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, { name, role }: UpdatePutUserDTO) {
    await this.validationService.validateEntityExists('user', id);
    return this.prisma.user.update({
      where: { id },
      data: { name, role: role as unknown as UserRole },
    });
  }

  async updatePartial(id: number, { name, role }: UpdatePatchUserDTO) {
    await this.validationService.validateEntityExists('user', id);

    const data: any = {};
    if (name) data.name = name;
    if (role) data.role = role;

    return this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.validationService.validateEntityExists('user', id);
    return this.prisma.user.delete({ where: { id } });
  }
}
