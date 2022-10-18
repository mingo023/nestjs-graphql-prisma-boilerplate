import { Module } from '@nestjs/common';
import { UsersResolver } from './graphqls/resolvers/user.resolver';

@Module({
    providers: [UsersResolver]
})
export class UserModule {}
