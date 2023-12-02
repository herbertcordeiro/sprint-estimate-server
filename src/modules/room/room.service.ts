import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDTO } from './dto/create-room.dto';
import { UpdateRoomDTO } from './dto/update-room.dto';
import { UpdatePartialRoomDTO } from './dto/update-partial-room.dto';
import { ValidationService } from 'src/common/validate.service';

@Injectable()
export class RoomService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly validationService: ValidationService,
  ) {}

  async create(data: CreateRoomDTO) {
    return this.prisma.room.create({ data });
  }

  async getAll() {
    return this.prisma.room.findMany();
  }

  async getOne(id: number) {
    await this.validationService.validateEntityExists('room', id);
    return this.prisma.room.findUnique({ where: { id } });
  }

  async getByInviteId(inviteId: string) {
    const room = await this.prisma.room.findUnique({ where: { inviteId } });
    if (!room) throw new Error();
    return room;
  }

  async update(id: number, data: UpdateRoomDTO) {
    await this.validationService.validateEntityExists('room', id);
    return this.prisma.room.update({ where: { id }, data });
  }

  async updatePartial(id: number, { name }: UpdatePartialRoomDTO) {
    await this.validationService.validateEntityExists('room', id);

    const data: any = {};
    if (name) data.name = name;

    return this.prisma.room.update({ where: { id }, data: { name } });
  }

  async delete(id: number) {
    await this.validationService.validateEntityExists('room', id);
    return this.prisma.room.delete({ where: { id } });
  }
}
