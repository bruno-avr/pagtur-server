import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AddressModule } from './modules/address/address.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './exception.filter';

@Module({
  imports: [UserModule, AddressModule],
  controllers: [],
  providers: [{
    provide: APP_FILTER,
    useClass: AllExceptionsFilter,
  }],
})
export class AppModule {}
