import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { RoomService } from './room.service';
import { ParamId } from 'src/decorators/param-id.decorator';
import { CreateRoomDTO } from './dto/create-room.dto';
import { UpdatePartialRoomDTO } from './dto/update-partial-room.dto';
import { UpdateRoomDTO } from './dto/update-room.dto';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  async create(@Body() data: CreateRoomDTO) {
    return this.roomService.create(data);
  }

  @Get()
  async getAll() {
    return this.roomService.getAll();
  }

  @Get(':id')
  async getOne(@ParamId() id: number) {
    return this.roomService.getOne(id);
  }

  @Put(':id')
  async update(@ParamId() id: number, @Body() data: UpdateRoomDTO) {
    return this.roomService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(
    @ParamId() id: number,
    @Body() data: UpdatePartialRoomDTO,
  ) {
    return this.roomService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return this.roomService.delete(id);
  }
}
