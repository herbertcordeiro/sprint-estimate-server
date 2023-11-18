import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { IdCheckMiddleware } from 'src/middlewares/id-check.middleware';
import { PrismaModule } from '../prisma/prisma.module';
import { ValidationService } from 'src/common/validate.service';

@Module({
  imports: [PrismaModule],
  controllers: [RoomController],
  providers: [RoomService, ValidationService],
  exports: [],
})
export class RoomModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IdCheckMiddleware)
      .forRoutes({ path: 'rooms/:id', method: RequestMethod.ALL });
  }
}
