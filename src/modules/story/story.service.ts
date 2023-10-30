import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateStoryDTO } from './dto/create-story.dto';
import { UpdatePartialStoryDTO } from './dto/update-partial-story.dto';
import { UpdateStoryDTO } from './dto/update-story.dto';

@Injectable()
export class StoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateStoryDTO) {
    return this.prisma.story.create({ data });
  }

  async getAll() {
    return this.prisma.story.findMany();
  }

  async getOne(id: number) {
    await this.exists(id);
    return this.prisma.story.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateStoryDTO) {
    await this.exists(id);
    return this.prisma.story.update({ where: { id }, data });
  }

  async updatePartial(
    id: number,
    { description, estimate, status }: UpdatePartialStoryDTO,
  ) {
    await this.exists(id);

    const data: any = {};
    if (description) data.description = description;
    if (estimate) data.estimate = estimate;
    if (status) data.status = status;

    return this.prisma.story.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.exists(id);
    return this.prisma.story.delete({ where: { id } });
  }

  async exists(id: number) {
    if (!(await this.prisma.story.count({ where: { id } }))) {
      throw new NotFoundException(`Room ${id} does not exist.`);
    }
  }
}
