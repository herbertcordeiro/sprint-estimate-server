import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { VoteController } from './vote.controller';
import { VoteService } from './vote.service';
import { IdCheckMiddleware } from 'src/middlewares/id-check.middleware';
import { PrismaModule } from '../prisma/prisma.module';
import { ValidationService } from 'src/common/validate.service';

@Module({
  imports: [PrismaModule],
  controllers: [VoteController],
  providers: [VoteService, ValidationService],
  exports: [],
})
export class VoteModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IdCheckMiddleware)
      .forRoutes({ path: 'votes/:id', method: RequestMethod.ALL });
  }
}
