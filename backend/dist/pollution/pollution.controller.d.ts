import { PollutionService } from './pollution.service';
import { CreatePollutionDto } from './dto/create-pollution.dto';
import { UpdatePollutionDto } from './dto/update-pollution.dto';
export declare class PollutionController {
    private readonly pollutionService;
    constructor(pollutionService: PollutionService);
    create(createPollutionDto: CreatePollutionDto): string;
    findAll(): string;
    findOne(city: string): Promise<any>;
    update(id: string, updatePollutionDto: UpdatePollutionDto): string;
    remove(id: string): string;
}
