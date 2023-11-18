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
import { ValidationService } from 'src/common/validate.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, ValidationService],
  exports: [],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IdCheckMiddleware)
      .forRoutes({ path: 'users/:id', method: RequestMethod.ALL });
  }
}
