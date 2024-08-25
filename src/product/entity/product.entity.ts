import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';
@Entity()

export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column()
    inventoryStatus: string;

    @Column()
    category: string;

    @Column()
    image?: string;

    @Column()
    rating?: number;
}