import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { StoryService } from './story.service';
import { ParamId } from 'src/decorators/param-id.decorator';
import { CreateStoryDTO } from './dto/create-story.dto';
import { UpdateStoryDTO } from './dto/update-story.dto';
import { UpdatePartialStoryDTO } from './dto/update-partial-story.dto';

@Controller('stories')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  async create(@Body() data: CreateStoryDTO) {
    return this.storyService.create({
      description: data.description,
      estimate: data.estimate,
      status: data.status,
      roomId: +data.roomId,
    });
  }

  @Get()
  async getAll() {
    return this.storyService.getAll();
  }

  @Get(':id')
  async getOne(@ParamId() id: number) {
    return this.storyService.getOne(id);
  }

  @Put(':id')
  async update(@ParamId() id: number, @Body() data: UpdateStoryDTO) {
    return this.storyService.update(id, {
      description: data.description,
      estimate: data.estimate,
      status: data.status,
      roomId: +data.roomId,
    });
  }

  @Patch(':id')
  async updatePartial(
    @ParamId() id: number,
    @Body() data: UpdatePartialStoryDTO,
  ) {
    return this.storyService.updatePartial(id, {
      description: data.description,
      estimate: data.estimate,
      status: data.status,
      roomId: +data.roomId,
    });
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return this.storyService.delete(id);
  }
}
