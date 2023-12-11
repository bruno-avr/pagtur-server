import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { PrismaService } from '../../database/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "SEGREDO"
    }),
  ],
  controllers: [SchoolController],
  providers: [SchoolService, PrismaService],
})
export class SchoolModule {}
