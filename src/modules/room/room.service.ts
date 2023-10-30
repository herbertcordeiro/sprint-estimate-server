import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDTO } from './dto/create-room.dto';
import { UpdateRoomDTO } from './dto/update-room.dto';
import { UpdatePartialRoomDTO } from './dto/update-partial-room.dto';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRoomDTO) {
    return this.prisma.room.create({ data });
  }

  async getAll() {
    return this.prisma.room.findMany();
  }

  async getOne(id: number) {
    await this.exists(id);
    return this.prisma.room.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateRoomDTO) {
    await this.exists(id);
    return this.prisma.room.update({ where: { id }, data });
  }

  async updatePartial(id: number, { name }: UpdatePartialRoomDTO) {
    await this.exists(id);

    const data: any = {};
    if (name) data.name = name;

    return this.prisma.room.update({ where: { id }, data: { name } });
  }

  async delete(id: number) {
    await this.exists(id);
    return this.prisma.room.delete({ where: { id } });
  }

  async exists(id: number) {
    if (!(await this.prisma.room.count({ where: { id } }))) {
      throw new NotFoundException(`Room ${id} does not exist.`);
    }
  }
}
