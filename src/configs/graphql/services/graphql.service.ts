import { ApolloDriver } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { GraphQlExceptionFilter } from '~cores/filters/graphql-exception.filter';

@Injectable()
export class GraphQLService implements GqlOptionsFactory {
    async createGqlOptions(): Promise<Record<string, unknown> & GqlModuleOptions> {
        return {
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
        };
    }
}
