import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { Product } from './entity/product.entity';
import { ProductService } from './product.service';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }
  @Get()
  @ApiResponse({ status: 200, description: 'List of Products ', type: Product })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Product was found', type: Product })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async findOneBy(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Product was created', type: Product })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(@Body() createProductDto: CreateProductDto): Promise<void> {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Product was updated', type: Product })
  @ApiResponse({ status: 400, description: 'Validation failed (uuid is expected)' })
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }
  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Product was updated', type: Product })
  @ApiResponse({ status: 400, description: 'Validation failed (uuid is expected)' })
  async patch(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Product was deleted' })
  @ApiResponse({ status: 400, description: 'Validation failed (uuid is expected)' })
  @ApiResponse({ status: 404, description: 'Not Found. Product not found.' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.productService.remove(id);
  }
}
