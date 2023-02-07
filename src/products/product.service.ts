import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
  ) {}

  async getProducts() {
    try {
      const allProducts = await this.productRepo.find();
      return allProducts;
    } catch (err) {
      return { status: 500, error: err.message };
    }
  }

  async createProduct(createProductDto: ProductDto) {
    try {
      const productLead = this.productRepo.create(createProductDto);
      const product = await this.productRepo.save(productLead);
      return { statusCode: 200, data: product };
    } catch (err) {
      return { statusCode: 500, error: err.message };
    }
  }
}
