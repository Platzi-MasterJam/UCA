import { Injectable, HttpService } from '@nestjs/common';
import { CreatePollutionDto } from './dto/create-pollution.dto';
import { UpdatePollutionDto } from './dto/update-pollution.dto';

const token = '706543259e22ed7486aedbe0fc0e15a601ee93cd';

@Injectable()
export class PollutionService {
  constructor(private httpService: HttpService) {}
  create(createPollutionDto: CreatePollutionDto) {
    console.log(createPollutionDto);
    return 'This action adds a new pollution';
  }

  findAll() {
    return `This action returns all pollution`;
  }

  async findOne(city: string) {
    const query = `https://api.waqi.info/feed/${city}/?token=${token}`;
    const result = await this.httpService.get(query).toPromise();
    console.log(result.data)
    return result.data
  }

  update(id: number, updatePollutionDto: UpdatePollutionDto) {
    console.log(updatePollutionDto);
    return `This action updates a #${id} pollution`;
  }

  remove(id: number) {
    return `This action removes a #${id} pollution`;
  }
}
