import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';

const validVoteValues = [
  '0',
  '0.5',
  '1',
  '2',
  '3',
  '5',
  '8',
  '13',
  '20',
  '40',
  'doubt',
  'pause',
];

export class CreateVoteDTO {
  @IsInt()
  @Type(() => Number)
  @IsOptional()
  userId: number;

  @IsInt()
  @Type(() => Number)
  @IsOptional()
  storyId: number;

  @IsString()
  @IsIn(validVoteValues, { message: 'Invalid vote' })
  value: string;
}
