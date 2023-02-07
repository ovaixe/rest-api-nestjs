import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('get-all')
  async getHello() {
    try {
      const res = await this.productService.getProducts();
      return res;
    } catch (err) {
      return { statusCode: 500, error: err.message };
    }
  }

  @Post('create')
  async addProduct(@Body() body: ProductDto) {
    try {
      const res = await this.productService.createProduct(body);
      return res;
    } catch (err) {
      return { statusCode: 500, error: err.message };
    }
  }
}
