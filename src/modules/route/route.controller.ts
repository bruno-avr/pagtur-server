import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RouteService } from './route.service';
import { Prisma } from '@prisma/client';

@Controller('route')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post()
  create(@Body() data: Prisma.RouteCreateInput) {
    return this.routeService.create(data);
  }

  @Get()
  findAll() {
    return this.routeService.findAll();
  }
}
