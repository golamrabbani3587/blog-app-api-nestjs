import { Controller, Get, Post, Body,UseGuards, Request,Param} from '@nestjs/common';
import { BlogsService } from './blog.service';
import { Blog } from './blog.entity';
import { JwtAuthGuard } from '../user/jwt.guard';

@Controller('blogs')
export class BlogsController {
    constructor (private readonly blogService: BlogsService){}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async register(@Request() request, @Body() blog: Blog): Promise<Blog> {
    blog.userId = request.user.sub;
    return this.blogService.newBlog(blog);
  }

  @Get(':id')
  async getBlogs(@Param('id') id: number): Promise<Blog> {
    return this.blogService.getBlog(id);
  }
}