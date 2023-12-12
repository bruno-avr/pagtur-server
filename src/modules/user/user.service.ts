import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

export type LoginType = {
  username: string,
  password: string
}

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
    ) {}

  async create(data: Prisma.UserCreateInput) {
    const usernameExists = await this.prisma.user.findFirst({
      where: { username: data.username }
    })

    if (usernameExists) {
      throw new Error("Username already registered");
    }
    const user = await this.prisma.user.create({
      data: {
        ...data,
        type: 'PARENT'
      }
    })
    return {
      accessToken: await this.jwtService.signAsync(user),
      username: user.username,
      name: user.name,
      type: user.type,
      id: user.id
    }
  }

  async login(data: LoginType) {
    const user = await this.prisma.user.findFirst({
      where: { username: data.username }
    })

    if (!user) {
      throw new Error("Username not found");
    }

    if (user.password != data.password) {
      throw new Error("Wrong password");
    }

    return {
      accessToken: await this.jwtService.signAsync(user),
      username: user.username,
      name: user.name,
      type: user.type,
      id: user.id
    }
  }

  async findParents() {
    const parents = await this.prisma.user.findMany({
      where: { type: 'PARENT' }
    })

    return { parents }
  }
}
