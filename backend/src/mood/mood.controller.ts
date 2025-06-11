import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { MoodService } from './mood.service';
import { CreateMoodDto } from './dto/create-mood.dto';
import { UpdateMoodDto } from './dto/update-mood.dto';

@Controller('mood')
export class MoodController {
  constructor(private readonly moodService: MoodService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMoodDto: CreateMoodDto) {
    return this.moodService.create(createMoodDto);
  }

  @Get()
  findAll(@Query('startDate') startDate?: string, @Query('endDate') endDate?: string) {
    if (startDate && endDate) {
      return this.moodService.findByDateRange(new Date(startDate), new Date(endDate));
    }
    return this.moodService.findAll();
  }

  @Get('stats')
  getStats() {
    return this.moodService.getStats();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moodService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoodDto: UpdateMoodDto) {
    return this.moodService.update(id, updateMoodDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.moodService.remove(id);
  }
}
