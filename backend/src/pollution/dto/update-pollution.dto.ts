import { PartialType } from '@nestjs/mapped-types';
import { CreatePollutionDto } from './create-pollution.dto';

export class UpdatePollutionDto extends PartialType(CreatePollutionDto) {}
