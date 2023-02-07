import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlCreds } from './config/mysql';
import { ProductModule } from './products/product.module';
import { ProductEntity } from './products/entities/product.entity';

const mysqlOptions: any = {
  type: mysqlCreds.type,
  host: mysqlCreds.host,
  port: mysqlCreds.port,
  database: mysqlCreds.database,
  username: mysqlCreds.username,
  password: mysqlCreds.password,
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...mysqlOptions,
      database: 'patients',
      entities: [ProductEntity],
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
