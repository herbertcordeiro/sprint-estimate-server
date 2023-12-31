import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { StoryService } from './story.service';
import { StoryController } from './story.controller';
import { IdCheckMiddleware } from 'src/middlewares/id-check.middleware';
import { PrismaModule } from '../prisma/prisma.module';
import { ValidationService } from 'src/common/validate.service';

@Module({
  imports: [PrismaModule],
  controllers: [StoryController],
  providers: [StoryService, ValidationService],
  exports: [],
})
export class StoryModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IdCheckMiddleware)
      .forRoutes({ path: 'stories/:id', method: RequestMethod.ALL });
  }
}
