import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('get-all')
  async getAll() {
    try {
      const res = await this.productService.getProducts();
      return res;
    } catch (err) {
      return { statusCode: 500, error: err.message };
    }
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    try {
      const res = await this.productService.getProductById(id);
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

  @Patch('update/:id')
  async updateById(@Param('id') id: number, @Body() body: ProductDto) {
    try {
      const res = await this.productService.updateProductById(id, body);
      return res;
    } catch (err) {
      return { statusCode: 500, error: err.message };
    }
  }

  @Delete('delete/:id')
  async deleteById(@Param('id') id: number) {
    try {
      const res = await this.productService.deleteProductById(id);
      return res;
    } catch (err) {
      return { statusCode: 500, error: err.message };
    }
  }
}
