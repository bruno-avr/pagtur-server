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
    const route = await this.prisma.route.create({
      data
    })
    return route;
  }
  
  async findAll() {
    const routes = await this.prisma.route.findMany({
      include: {
        schools: true
      },
      orderBy: [
        { departureTime: 'asc' },
        { returnTime: 'asc' },
      ]
    })
    return {
      routes
    };
  }
}
