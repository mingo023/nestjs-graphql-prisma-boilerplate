import { HttpException } from '@nestjs/common';
import { GraphQLError } from 'graphql';

export class GraphQlExceptionFilter {
    formatError(error: GraphQLError) {
        if (error.extensions?.exception instanceof HttpException) {
            const exception = error.extensions.exception as HttpException;
            return {
                message: exception.message,
                statusCode: exception.getStatus()
            };
        }

        return {
            message: error.message,
            code: error.extensions.code
        };
    }
}
