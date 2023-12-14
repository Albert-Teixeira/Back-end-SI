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
  
  //contador
  @Get(':id')
  async getProduct(@Param('id') id: number) {
    try {
      // Incrementa o contador de acessos do produto com o ID fornecido
      await this.productService.incrementProductViews(id);

      // Recupera e retorna os detalhes do produto
      const productDetails = await this.productService.findOne(id);

      return { product: productDetails };
    } catch (error) {
      // Lidar com erros, como produto não encontrado
      console.error(error);
      throw error; // Propagar o erro para o manipulador de erros global
    }
  }

}
