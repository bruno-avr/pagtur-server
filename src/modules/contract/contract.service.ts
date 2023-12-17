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
    const contracts = await this.prisma.contract.findMany({
      include: {
        parent: {
          include: {
            address: true
          }
        },
        payments: true,
        route: true,
        school: true
      }
    })
    return {
      contracts
    };
  }
  
  async findOne(id: string) {
    const res = await this.prisma.contract.findFirst({
      where: { id },
      include: {
        parent: {
          include: {
            address: true
          }
        },
        payments: true,
        route: {
          include: {
            schools: true
          }
        },
        school: {
          include: {
            address: true
          }
        }
      }
    });
    if (res?.payments) {
      function compareDates(a: any, b: any) {
        const dateA = new Date(a.referringMonth.replace(/(\d{2})\/(\d{4})/, "$2-$1"));
        const dateB = new Date(b.referringMonth.replace(/(\d{2})\/(\d{4})/, "$2-$1"));
      
        return dateB.getTime() - dateA.getTime();
      }
      res.payments.sort(compareDates)
    }
    return res
  }
  
  async findAllByParent(parentId: string) {
    const contracts = await this.prisma.contract.findMany({
      where: { parentId },
      include: {
        parent: {
          include: {
            address: true
          }
        },
        payments: true,
        route: true,
        school: true
      },
      orderBy: [
        { active: 'desc' },
        { student: 'asc' },
      ]
    })
    return {
      contracts
    };
  }
  
  async deactivate(id: string) {
    await this.prisma.contract.update({
      where: { id },
      data: {
        active: false
      }
    })
  }
}
