import { Module } from '@nestjs/common';
import { PollutionModule } from './pollution/pollution.module';

@Module({
  imports: [PollutionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
