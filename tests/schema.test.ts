import { graphql } from 'graphql';

import schema from '../src/schema';

import { createTestContext } from './utils';

describe('GraphQL API', () => {
  it('works', async () => {
    const response = await graphql({
      schema,
      contextValue: createTestContext(),
      source: `
        query {
          currentUser {
            id
          }
        }
      `,
    });

    expect(response.data).toEqual({ currentUser: null });
  });
});
