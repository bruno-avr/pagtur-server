import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AddressModule } from './modules/address/address.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './exception.filter';
import { SchoolModule } from './modules/school/school.module';
import { RouteModule } from './modules/route/route.module';
import { ContractModule } from './modules/contract/contract.module';
import { PaymentModule } from './modules/payment/payment.module';

@Module({
  imports: [UserModule, AddressModule, SchoolModule, RouteModule, ContractModule, PaymentModule],
  controllers: [],
  providers: [{
    provide: APP_FILTER,
    useClass: AllExceptionsFilter,
  }],
})
export class AppModule {}
