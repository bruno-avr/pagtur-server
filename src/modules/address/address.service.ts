import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AddressCreateInput) {
    const address = await this.prisma.address.create({
      data
    })
    return address;
  }

  findAll() {
    return `This action returns all address`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, data: Prisma.AddressUpdateInput) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
