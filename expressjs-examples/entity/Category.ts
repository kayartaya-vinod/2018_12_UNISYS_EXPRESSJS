import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

// ./entity/Category.ts

@Entity({
    name: 'categories' // table name
})
export class Category {
    @PrimaryGeneratedColumn({ name: 'category_id' })
    id: number;
    @Column({ name: 'category_name' })
    name: string;
    @Column()
    description: string;
    @Column()
    picture: Buffer;
}