import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from "typeorm";
import { User } from '../user/user.entity'

@Entity()
export class Blog{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number
    
    @Column()
    title: string

    @Column()
    content: string
    @ManyToOne(() => User, user => user.blogs)
    user: User;
}