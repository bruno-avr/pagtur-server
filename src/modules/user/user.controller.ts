import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginType, UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: Prisma.UserCreateInput) {
    return this.userService.create(data);
  }

  @Post('login')
  findUsername(@Body() data: LoginType) {
    return this.userService.login(data);
  }
  
  @Get('parents')
  findParents() {
    return this.userService.findParents();
  }
}
