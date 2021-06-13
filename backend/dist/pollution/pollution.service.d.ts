import { HttpService } from '@nestjs/common';
import { CreatePollutionDto } from './dto/create-pollution.dto';
import { UpdatePollutionDto } from './dto/update-pollution.dto';
export declare class PollutionService {
    private httpService;
    constructor(httpService: HttpService);
    create(createPollutionDto: CreatePollutionDto): string;
    findAll(): string;
    findOne(city: string): Promise<any>;
    update(id: number, updatePollutionDto: UpdatePollutionDto): string;
    remove(id: number): string;
}
