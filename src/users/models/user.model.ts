import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '~shares/models/base.model';

@ObjectType()
export class UserModel extends BaseModel {
    @Field()
    email?: string;

    @Field({ nullable: true })
    name?: string;
}
