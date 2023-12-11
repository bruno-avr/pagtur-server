import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RouteService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
    ) {}

  async create(data: Prisma.RouteCreateInput) {
    const address = await this.prisma.route.create({
      data
    })
    return address;
  }
  
  async findAll() {
    const routes = await this.prisma.route.findMany({
      include: {
        schools: true
      }
    })
    return {
      routes
    };
  }
}
