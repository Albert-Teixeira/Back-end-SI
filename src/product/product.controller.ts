import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductType, CityType } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(@Query("type")type?:ProductType, @Query("city")city?:CityType) {
    console.log(type)
    console.log(city)
    if (type && !Object.values(ProductType).includes(type)) throw new BadRequestException("Tipo invalido")

    if (city && (!Object.values(CityType).includes(city))) throw new BadRequestException("Cidade invalida")

    return this.productService.findAll(type, city);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

}
