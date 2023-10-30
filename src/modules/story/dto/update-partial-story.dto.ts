import { PartialType } from '@nestjs/mapped-types';
import { CreateStoryDTO } from './create-story.dto';

export class UpdatePartialStoryDTO extends PartialType(CreateStoryDTO) {}
