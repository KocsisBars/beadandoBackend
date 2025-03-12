import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';

@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Post()
  create(@Body() createConcertDto: CreateConcertDto) {
    return this.concertsService.create(createConcertDto);
  }

  @Get()
  findAll() {
    return this.concertsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const concert = await this.concertsService.findOne(+id);
    if (concert == null) {
      throw new NotFoundException("Nincs ilyen koncert")
    }
    return concert;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConcertDto: UpdateConcertDto) {
    return this.concertsService.update(+id, updateConcertDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.concertsService.remove(+id);
  }
}
