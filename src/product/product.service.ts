import { Injectable } from '@nestjs/common';
import { CityType, ProductType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prismaService : PrismaService){
    
  }

  findAll(type? : ProductType, city?: CityType) {
    return this.prismaService.product.findMany({
      where: {type, cidade: city },
    });
  }
  findOne(id: number) {
    return this.prismaService.product.findUnique({where:{id},include:{reviews:true}});

  }

}

