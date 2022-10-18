import { Injectable } from '@nestjs/common';
import { PrismaService } from '~prisma/services/prisma.service';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {}

    getUsers() {
        return this.prismaService.user.findMany();
    }
}
