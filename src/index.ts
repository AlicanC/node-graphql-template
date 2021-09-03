import express from 'express';
import http from 'http';

import router from './router';

const port = 4000;

async function main() {
  // Setup Express app
  const app = express();
  app.use(router);

  // Setup HTTP server
  const server = http.createServer();
  server.addListener('request', app);
  server.listen({ exclusive: true, port }, () => {
    console.log(`Server listening on port ${port}`);
  });
}

main();
