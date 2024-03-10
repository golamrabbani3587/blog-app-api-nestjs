import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm';
import { Blog } from '../blog/blog.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Blog, blog => blog.userId)
  blogs: Blog[];
}
