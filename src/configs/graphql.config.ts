import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { GraphQlExceptionFilter } from '~cores/filters/graphql-exception.filter';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'schema.gql',
            installSubscriptionHandlers: true,
            formatError: new GraphQlExceptionFilter().formatError,
            buildSchemaOptions: {
                directives: [
                    new GraphQLDirective({
                        name: 'upper',
                        locations: [DirectiveLocation.FIELD_DEFINITION]
                    })
                ]
            }
        })
    ]
})
export class GraphQLConfigModule {}
