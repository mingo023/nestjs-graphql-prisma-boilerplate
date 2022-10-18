import { Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { UserService } from '~users/services/user.service';
import { UserModel } from '../../models/user.model';

@Resolver(() => UserModel)
export class UsersResolver {
    constructor(private userService: UserService) {}

    @Query(() => [UserModel])
    async authors(): Promise<User[]> {
        return this.userService.getUsers();
    }
}
