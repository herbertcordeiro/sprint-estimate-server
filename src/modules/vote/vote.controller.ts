import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { VoteService } from './vote.service';
import { ParamId } from 'src/decorators/param-id.decorator';
import { CreateVoteDTO } from './dto/create-vote.dto';
import { UpdateVoteDTO } from './dto/update-vote.dto';
import { UpdatePartialVoteDTO } from './dto/update-partial-vote.dto';

@Controller('votes')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  async create(@Body() data: CreateVoteDTO) {
    return this.voteService.create({
      value: data.value,
      userId: +data.userId,
      storyId: +data.storyId,
    });
  }

  @Get()
  async getAll() {
    return this.voteService.getAll();
  }

  @Get(':id')
  async getOne(@ParamId() id: number) {
    return this.voteService.getOne(id);
  }

  @Put(':id')
  async update(@ParamId() id: number, @Body() data: UpdateVoteDTO) {
    return this.voteService.update(id, {
      value: data.value,
      userId: +data.userId,
      storyId: +data.storyId,
    });
  }

  @Patch(':id')
  async updatePartial(
    @ParamId() id: number,
    @Body() data: UpdatePartialVoteDTO,
  ) {
    return this.voteService.updatePartial(id, {
      value: data.value,
      userId: +data.userId,
      storyId: +data.storyId,
    });
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return this.voteService.delete(id);
  }
}
