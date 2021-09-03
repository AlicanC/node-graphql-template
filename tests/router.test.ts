import express from 'express';
import request from 'supertest';

import router from '../src/router';

describe('Express Router', () => {
  it('works', async () => {
    const app = express();
    app.use(router);
    const response = await request(app)
      .get('/graphql')
      .query({
        query: `
          query {
            currentUser {
              id
            }
          }
        `,
      });

    expect(response.status).toBe(200);
    expect(response.body.data.currentUser).toBe(null);
  });
});
