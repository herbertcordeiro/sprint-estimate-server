import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateVoteDTO } from './dto/create-vote.dto';
import { UpdatePartialVoteDTO } from './dto/update-partial-vote.dto';
import { UpdateVoteDTO } from './dto/update-vote.dto';

@Injectable()
export class VoteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateVoteDTO) {
    return this.prisma.vote.create({ data });
  }

  async getAll() {
    return this.prisma.vote.findMany();
  }

  async getOne(id: number) {
    await this.exists(id);
    return this.prisma.vote.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateVoteDTO) {
    await this.exists(id);
    return this.prisma.vote.update({ where: { id }, data });
  }

  async updatePartial(id: number, { userId, value }: UpdatePartialVoteDTO) {
    await this.exists(id);

    const data: any = {};
    if (userId) data.userId = userId;
    if (value) data.value = value;

    return this.prisma.vote.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.exists(id);
    return this.prisma.vote.delete({ where: { id } });
  }

  async exists(id: number) {
    if (!(await this.prisma.vote.count({ where: { id } }))) {
      throw new NotFoundException(`Room ${id} does not exist.`);
    }
  }
}
