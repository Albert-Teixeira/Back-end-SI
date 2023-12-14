import { Injectable, NotFoundException } from '@nestjs/common';
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

  //contador

  async incrementProductViews(productId: number): Promise<void> {
    // Encontra o produto pelo ID
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
    });

    // Se o produto não for encontrado, lança uma exceção NotFoundException
    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    // Incrementa o contador de acessos
    product.acessos += 1;

    // Salva as alterações no banco de dados
    await this.prismaService.product.update({
      where: { id: productId },
      data: { acessos: product.acessos },
    });
  }

}

