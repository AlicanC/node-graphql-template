import express from 'express';
import bearerToken from 'express-bearer-token';
import { graphqlHTTP } from 'express-graphql';
import PromiseRouter from 'express-promise-router';
import expressPlayground from 'graphql-playground-middleware-express';
import { graphqlUploadExpress } from 'graphql-upload';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

import { GraphQLContext } from './context';
import schema from './schema';
import { UserModel } from './types';

const router = PromiseRouter();

const getUserFromToken = async (token: string): Promise<UserModel> => {
  throw new Error('Not implemented');
};

// GraphQL
const graphqlRouter = PromiseRouter();
graphqlRouter.use(bearerToken());
graphqlRouter.use(express.json({ limit: '50mb' }));
graphqlRouter.use(graphqlUploadExpress());
graphqlRouter.use(
  graphqlHTTP(async (_request) => {
    // Fix type problem
    const request = _request as express.Request;

    // Get user from token
    let currentUser = null;
    if (request.token) {
      currentUser = await getUserFromToken(request.token);
    }

    // Build context
    const context: GraphQLContext = {
      currentUser,
    };

    return {
      schema,
      context,
    };
  }),
);
router.use('/graphql', graphqlRouter);

// GraphQL Playground
router.get('/', expressPlayground({ endpoint: '/graphql' }));

// GraphQL Voyager
router.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

export default router;
