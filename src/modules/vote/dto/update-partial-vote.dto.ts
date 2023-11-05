import { PartialType } from '@nestjs/mapped-types';
import { CreateVoteDTO } from './create-vote.dto';

export class UpdatePartialVoteDTO extends PartialType(CreateVoteDTO) {}
