import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollutionModule } from './pollution/pollution.module';

@Module({
  imports: [PollutionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
