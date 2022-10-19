import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLService } from './services/graphql.service';

@Module({
    imports: [
        GraphQLModule.forRootAsync({
            useClass: GraphQLService,
            driver: ApolloDriver
        })
    ]
})
export class GraphQLConfigModule {}
