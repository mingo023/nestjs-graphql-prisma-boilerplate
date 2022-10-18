import { Query, Resolver } from '@nestjs/graphql';
import { UserModel } from '../../models/user.model';

@Resolver(() => UserModel)
export class UsersResolver {
    @Query(() => UserModel)
    async authors(): Promise<UserModel> {
        const user = new UserModel();
        user.id = 1;
        return user;
    }
}
