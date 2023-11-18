import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class ValidationService {
  constructor(private readonly prisma: PrismaService) {}

  async validateEntityExists(entity: string, id: number) {
    if (!(await this.prisma[entity.toLowerCase()].count({ where: { id } }))) {
      throw new NotFoundException(`${entity} ${id} does not exist.`);
    }
  }
}
