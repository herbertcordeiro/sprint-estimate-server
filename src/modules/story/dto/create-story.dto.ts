import {
  IsEnum,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Type } from 'class-transformer';

import { StoryStatus } from '@prisma/client';

const validEstimateValues = [
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
];

export class CreateStoryDTO {
  @IsInt()
  @Type(() => Number)
  @IsOptional()
  roomId: number;

  @IsString()
  @Length(1, 255)
  description: string;

  @IsString()
  @IsIn(validEstimateValues, { message: 'Invalid estimate value' })
  estimate: string;

  @IsEnum(StoryStatus)
  status: StoryStatus;
}
