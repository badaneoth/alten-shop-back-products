import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  
    @ApiProperty({
        description: 'Product Code',
        nullable: false,
        minLength: 1
    })
    code: string;

    @ApiProperty({
        description: 'Product name',
        nullable: false
    })

    name: string;

    @ApiProperty({
        description: 'Product description',
        nullable: true
    })
    description: string;

    @ApiProperty({
        description: 'Product price',
        nullable: true
    })
    price: number;

    @ApiProperty()
    quantity: number;

    @ApiProperty({
        description: 'Product inventory Status',
        nullable: true
    })
    inventoryStatus: string;

    @ApiProperty({
        description: 'Product category',
        nullable: true
    })
    category: string;

    @ApiProperty()
    image?: string;

    @ApiProperty()
    rating?: number;
}