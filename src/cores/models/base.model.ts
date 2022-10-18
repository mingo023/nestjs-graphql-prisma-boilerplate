import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseModel {
    @Field(() => Int)
    id: number;
}
