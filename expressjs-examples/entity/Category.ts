import { Entity, PrimaryColumn, Column } from 'typeorm';

// ./entity/Category.ts

@Entity({
    name: 'categories'
})
export class Category {
    @PrimaryColumn({ name: 'category_id' })
    id: number;
    @Column({ name: 'category_name' })
    name: string;
    @Column()
    description: string;
    @Column({ select: false })
    picture: Buffer;
}