import { HttpModule, Module } from '@nestjs/common';
import { PollutionService } from './pollution.service';
import { PollutionController } from './pollution.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'statics', 'server', 'pages'),
    }),
  ],
  controllers: [PollutionController],
  providers: [PollutionService],
})
export class PollutionModule {}
