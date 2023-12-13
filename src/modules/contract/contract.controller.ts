import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContractService } from './contract.service';
import { Prisma } from '@prisma/client';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  create(@Body() data: Prisma.ContractCreateInput) {
    return this.contractService.create(data);
  }

  @Get()
  findAll() {
    return this.contractService.findAll();
  }
}
