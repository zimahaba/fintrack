import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomesModule } from './models/income/incomes.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { IncomesController } from './models/income/incomes.controller';

@Module({
  imports: [IncomesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //consumer.apply(LoggerMiddleware).forRoutes(IncomesController);
    consumer.apply(LoggerMiddleware).forRoutes();
  }
}
