import { Module } from '@nestjs/common';
import { GraphQLConfigModule } from '~configs/graphql.config';
import { PrismaModule } from '~prisma/prisma.module';
import { UserModule } from './users/user.module';

@Module({
    imports: [GraphQLConfigModule, PrismaModule, UserModule]
})
export class AppModule {}
