import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('register')
  async register(@Body() user: User): Promise<User> {
    return this.usersService.register(user);
  }

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string): Promise<{ accessToken: any }> {
    return this.usersService.login(email, password);
  }
}
