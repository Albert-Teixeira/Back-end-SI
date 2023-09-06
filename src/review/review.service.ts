import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReviewService {
  constructor (private readonly prismaService:PrismaService){

  }
  create(createReviewDto: CreateReviewDto) {
    return this.prismaService.review.create({data:createReviewDto})
  }
}
