import { Injectable } from '@nestjs/common';
import { PrismaService } from '~configs/prisma/services/prisma.service';
import { CreateUserDto } from '~users/dtos/create-user.dto';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {}

    getUsers() {
        return this.prismaService.user.findMany();
    }

    createUser(data: CreateUserDto) {
        return this.prismaService.user.create({ data });
    }
}
