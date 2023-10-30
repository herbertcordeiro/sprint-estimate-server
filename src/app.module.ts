import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { RoomModule } from './modules/room/room.module';

@Module({
  imports: [UserModule, RoomModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
