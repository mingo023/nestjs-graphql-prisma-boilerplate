import { Module } from '@nestjs/common';
import { GraphQLConfigModule } from '~configs/graphql.config';
import { UserModule } from './users/user.module';

@Module({
    imports: [GraphQLConfigModule, UserModule]
})
export class AppModule {}
