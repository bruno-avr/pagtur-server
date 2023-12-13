import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ContractService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
    ) {}

  async create(data: Prisma.ContractCreateInput) {
    const contract = await this.prisma.contract.create({
      data
    })
    return contract;
  }
  
  async findAll() {
    const contracts = await this.prisma.contract.findMany({})
    return {
      contracts
    };
  }
}
