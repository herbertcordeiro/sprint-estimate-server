import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateVoteDTO } from './dto/create-vote.dto';
import { UpdatePartialVoteDTO } from './dto/update-partial-vote.dto';
import { UpdateVoteDTO } from './dto/update-vote.dto';
import { ValidationService } from 'src/common/validate.service';

@Injectable()
export class VoteService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly validationService: ValidationService,
  ) {}

  async create(data: CreateVoteDTO) {
    await this.validationService.validateEntityExists('story', data.storyId);
    return this.prisma.vote.create({ data });
  }

  async getAll() {
    return this.prisma.vote.findMany();
  }

  async getOne(id: number) {
    await this.validationService.validateEntityExists('vote', id);
    return this.prisma.vote.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateVoteDTO) {
    await this.validationService.validateEntityExists('vote', id);
    return this.prisma.vote.update({ where: { id }, data });
  }

  async updatePartial(id: number, { userId, value }: UpdatePartialVoteDTO) {
    await this.validationService.validateEntityExists('vote', id);

    const data: any = {};
    if (userId) data.userId = userId;
    if (value) data.value = value;

    return this.prisma.vote.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.validationService.validateEntityExists('vote', id);
    return this.prisma.vote.delete({ where: { id } });
  }
}
