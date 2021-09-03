import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { GraphQLContext } from '../context';

export type UserModel = {
  id: string;
};

export const GraphQLUser = new GraphQLObjectType<UserModel, GraphQLContext>({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
  }),
});
