import { Test, TestingModule } from '@nestjs/testing';
import { PollutionService } from './pollution.service';

describe('PollutionService', () => {
  let service: PollutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PollutionService],
    }).compile();

    service = module.get<PollutionService>(PollutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
