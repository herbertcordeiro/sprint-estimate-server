import { IsString, Length } from 'class-validator';

export class CreateRoomDTO {
  @IsString()
  @Length(1, 255)
  name: string;
}
