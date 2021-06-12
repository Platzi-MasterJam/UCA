import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PollutionService } from './pollution.service';
import { CreatePollutionDto } from './dto/create-pollution.dto';
import { UpdatePollutionDto } from './dto/update-pollution.dto';

@Controller('pollution')
export class PollutionController {
  constructor(private readonly pollutionService: PollutionService) {}

  @Post()
  create(@Body() createPollutionDto: CreatePollutionDto) {
    return this.pollutionService.create(createPollutionDto);
  }

  @Get()
  findAll() {
    return this.pollutionService.findAll();
  }

  @Get(':city')
  findOne(@Param('city') city: string) {
    return this.pollutionService.findOne(city);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePollutionDto: UpdatePollutionDto,
  ) {
    return this.pollutionService.update(+id, updatePollutionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollutionService.remove(+id);
  }
}
