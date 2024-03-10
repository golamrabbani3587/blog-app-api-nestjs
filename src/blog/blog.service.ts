import { Injectable, NotFoundException } from '@nestjs/common';
import { Blog } from './blog.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  async newBlog(blog: Blog): Promise<Blog> {
    const newUser = this.blogRepository.create({ ...blog });
    return this.blogRepository.save(newUser);
  }


  async getBlog(blogId: number): Promise<Blog> {
    const blogData = await this.blogRepository
      .createQueryBuilder('blog')
      .leftJoinAndSelect('blog.user', 'user')
      .where('blog.id = :blogId', { blogId })
      .getOne();

    if (!blogData) {
      throw new NotFoundException('Blog not found');
    }

    return blogData;
  }


}