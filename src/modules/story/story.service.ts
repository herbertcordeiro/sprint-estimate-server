import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateStoryDTO } from './dto/create-story.dto';
import { UpdatePartialStoryDTO } from './dto/update-partial-story.dto';
import { UpdateStoryDTO } from './dto/update-story.dto';
import { ValidationService } from 'src/common/validate.service';

@Injectable()
export class StoryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly validationService: ValidationService,
  ) {}

  async create(data: CreateStoryDTO) {
    await this.validationService.validateEntityExists('room', data.roomId);
    return this.prisma.story.create({ data });
  }

  async getAll() {
    return this.prisma.story.findMany();
  }

  async getOne(id: number) {
    await this.validationService.validateEntityExists('story', id);
    return this.prisma.story.findUnique({ where: { id } });
  }

  async getAllByRoomId(roomId: number) {
    const stories = this.prisma.story.findMany({
      where: { roomId },
      orderBy: { createdAt: 'desc' },
    });
    if (!stories) throw new Error();
    return stories;
  }

  async update(id: number, data: UpdateStoryDTO) {
    await this.validationService.validateEntityExists('story', id);
    return this.prisma.story.update({ where: { id }, data });
  }

  async updatePartial(
    id: number,
    { description, estimate, status }: UpdatePartialStoryDTO,
  ) {
    await this.validationService.validateEntityExists('story', id);

    const data: any = {};
    if (description) data.description = description;
    if (estimate) data.estimate = estimate;
    if (status) data.status = status;

    return this.prisma.story.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.validationService.validateEntityExists('story', id);
    return this.prisma.story.delete({ where: { id } });
  }
}
