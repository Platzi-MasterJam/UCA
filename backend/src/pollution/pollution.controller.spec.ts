import { Test, TestingModule } from '@nestjs/testing';
import { PollutionController } from './pollution.controller';
import { PollutionService } from './pollution.service';

describe('PollutionController', () => {
  let controller: PollutionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollutionController],
      providers: [PollutionService],
    }).compile();

    controller = module.get<PollutionController>(PollutionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
