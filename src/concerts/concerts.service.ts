import { Injectable } from '@nestjs/common';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ConcertsService {

  constructor(private db: PrismaService) {}

  create(createConcertDto: CreateConcertDto) {
    return this.db.concert.create({
      data: createConcertDto
    })
  }

  findAll() {
    return this.db.concert.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} concert`;
  }

  update(id: number, updateConcertDto: UpdateConcertDto) {
    return `This action updates a #${id} concert`;
  }

  remove(id: number) {
    return `This action removes a #${id} concert`;
  }
}
