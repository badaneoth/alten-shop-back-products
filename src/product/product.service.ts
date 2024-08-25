import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { Product } from './entity/product.entity';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) { }

    async create(createProductDto: CreateProductDto) {
        const product = this.productRepository.create(
            createProductDto
        );
        await this.productRepository.save(product);

    }
    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async findOne(productId: string): Promise<Product> {

        const product = await this.productRepository.findOneBy({ id: productId });

        if (!product)
            throw new NotFoundException(`Could not find the product`);

        return product;
    }

    async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
        await this.productRepository.update(id, updateProductDto);
        return this.productRepository.findOneBy({ id: id });
    }

    async remove(id: string) {

        const product = await this.findOne(id);
        await this.productRepository.remove(product);
    }
}
