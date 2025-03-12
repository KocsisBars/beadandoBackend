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
    return this.db.concert.findUnique({
      where: { id }
    });
  }

  update(id: number, updateConcertDto: UpdateConcertDto) {
    return this.db.concert.update({
      where: { id },
      data: updateConcertDto
    });
  }

  remove(id: number) {
    return this.db.concert.delete({
      where: { id }
    });
  }
}
