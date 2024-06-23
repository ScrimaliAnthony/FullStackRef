import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(Number(id));
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
