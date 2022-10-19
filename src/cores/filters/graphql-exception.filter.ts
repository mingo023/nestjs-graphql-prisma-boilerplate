import { GraphQLError } from 'graphql';

export class GraphQlExceptionFilter {
    formatError(error: GraphQLError) {
        const errorResponse = {
            message: error.message,
            code: error.extensions && error.extensions.code,
            extensions: error.extensions,
            locations: error.locations,
            path: error.path
        };

        if (errorResponse.extensions.exception.stacktrace) {
            delete errorResponse.extensions.exception.stacktrace;
        }

        if (error.extensions.code === 'INTERNAL_SERVER_ERROR') {
            errorResponse.message = 'Internal server error';
        }

        return errorResponse;
    }
}
