import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { RoomModule } from './modules/room/room.module';
import { StoryModule } from './modules/story/story.module';
import { VoteModule } from './modules/vote/vote.module';

@Module({
  imports: [UserModule, RoomModule, StoryModule, VoteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
