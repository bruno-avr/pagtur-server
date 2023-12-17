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

  @Get('parent/:id')
  findAllByParent(@Param('id') id: string) {
    return this.contractService.findAllByParent(id);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractService.findOne(id);
  }

  @Post('deactivate/:id')
  deactivate(@Param('id') id: string) {
    return this.contractService.deactivate(id);
  }
}
