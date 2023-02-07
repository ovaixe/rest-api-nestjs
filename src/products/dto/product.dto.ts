import { IsString, MaxLength, IsNumber, IsIn } from 'class-validator';

export class ProductDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  @MaxLength(100)
  code: string;

  @IsIn(['Goods', 'Services'])
  @IsString()
  @MaxLength(50)
  product_type: string;
}
