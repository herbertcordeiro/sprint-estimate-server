import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { IdCheckMiddleware } from 'src/middlewares/id-check.middleware';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IdCheckMiddleware)
      .forRoutes({ path: 'users/:id', method: RequestMethod.ALL });
  }
}
