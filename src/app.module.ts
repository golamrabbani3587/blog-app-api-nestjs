// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { BlogsModule } from './blog/blog.module';
import { Blog } from './blog/blog.entity';
import { User } from './user/user.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'test',
      entities: [User,Blog],
      synchronize: true,
    }),
    UsersModule,
    BlogsModule
  ],
})
export class AppModule {}
