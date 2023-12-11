import { Module } from '@nestjs/common';
import { RouteService } from './route.service';
import { RouteController } from './route.controller';
import { PrismaService } from '../../database/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "SEGREDO"
    }),
  ],
  controllers: [RouteController],
  providers: [RouteService, PrismaService],
})
export class RouteModule {}
