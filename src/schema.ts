import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import { GraphQLContext } from './context';
import { GraphQLUser } from './types';

const query = new GraphQLObjectType<undefined, GraphQLContext>({
  name: 'Query',
  fields: {
    currentUser: {
      type: GraphQLUser,
      resolve: (source, args, context) => {
        return context.currentUser;
      },
    },
    user: {
      type: GraphQLUser,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: (source, args, context) => {
        return null;
      },
    },
  },
});

// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {},
// });

const schema = new GraphQLSchema({
  query,
  // mutation,
});

export default schema;
