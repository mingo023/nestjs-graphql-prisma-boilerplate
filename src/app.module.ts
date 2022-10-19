import { Module } from '@nestjs/common';
import { GraphQLConfigModule } from '~configs/graphql/graphql.module';
import { PrismaModule } from '~configs/prisma/prisma.module';
import { UserModule } from './users/user.module';

@Module({
    imports: [GraphQLConfigModule, PrismaModule, UserModule]
})
export class AppModule {}
