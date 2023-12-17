import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Prisma } from '@prisma/client';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  create(@Body() data: Prisma.PaymentCreateInput) {
    return this.paymentService.create(data);
  }

  @Get('/data')
  getData() {
    return this.paymentService.getData();
  }
}
