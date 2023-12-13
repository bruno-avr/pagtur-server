import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { PrismaService } from '../../database/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "SEGREDO"
    }),
  ],
  controllers: [ContractController],
  providers: [ContractService, PrismaService],
})
export class ContractModule {}
