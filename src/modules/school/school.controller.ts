import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchoolService } from './school.service';
import { Prisma } from '@prisma/client';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  create(@Body() data: Prisma.SchoolCreateInput) {
    return this.schoolService.create(data);
  }

  @Get()
  findAll() {
    return this.schoolService.findAll();
  }
}
