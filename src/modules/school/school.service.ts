import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SchoolService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
    ) {}

  async create(data: Prisma.SchoolCreateInput) {
    const school = await this.prisma.school.create({
      data
    })
    return school;
  }
  
  async findAll() {
    const schools = await this.prisma.school.findMany({})
    return {
      schools
    };
  }
}
