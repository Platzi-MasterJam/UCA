import { HttpModule, Module } from '@nestjs/common';
import { PollutionService } from './pollution.service';
import { PollutionController } from './pollution.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [PollutionController],
  providers: [PollutionService],
})
export class PollutionModule {}
