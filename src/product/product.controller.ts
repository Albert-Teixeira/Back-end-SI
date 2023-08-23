import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { type } from 'os';
import { ProductType } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(@Query("type")type?:ProductType) {
    if(type != "HOMENS" && type != "MULHERES" && type != "TRAVESTIS" && type != "VIPS" && type != undefined){
      throw new BadRequestException("Tipo invalido")
    }
    return this.productService.findAll(type);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

}
