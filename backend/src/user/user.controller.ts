import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  async createUser(
    @Body('nom') nom: string,
    @Body('prenom') prenom: string,
    @Body('email') email: string,
  ) {
    return this.userService.addUser(nom, prenom, email);
  }
}
