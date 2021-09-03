import { GraphQLContext } from '../../src/context';

export const createTestContext = async (): Promise<GraphQLContext> => {
  return {
    currentUser: null,
  };
};
