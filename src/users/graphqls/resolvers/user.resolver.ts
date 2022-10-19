import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { CreateUserDto } from '~users/dtos/create-user.dto';
import { UserService } from '~users/services/user.service';
import { UserModel } from '../../models/user.model';

@Resolver(() => UserModel)
export class UsersResolver {
    constructor(private userService: UserService) {}

    @Query(() => [UserModel])
    authors(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Mutation(() => UserModel)
    createUser(@Args('body') body: CreateUserDto): Promise<User> {
        return this.userService.createUser(body);
    }
}
