import { Module } from '@nestjs/common';
import { UsersResolver } from './graphqls/resolvers/user.resolver';
import { UserService } from './services/user.service';

@Module({
    providers: [UsersResolver, UserService]
})
export class UserModule {}
