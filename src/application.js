/* istanbul ignore file */
import dotenv from 'dotenv';
import express from 'express';
// import helmet from 'helmet';
import next from 'next';
import expressRoutes from './routes/index.js';
import { initApollo } from './services/graphql/apollo.js';
import { initServerLogging } from './utils/initialization.utils.js';
import { logInfo } from './utils/log.utils.js';

dotenv.config();

function initializeExpress() {
  const server = express();
  server.set('port', process.env.PORT);
  // server.use(helmet());
  initServerLogging(server);
  server.use(expressRoutes);
  return server;
}

function start() {
  const expressServer = initializeExpress();
  const nextServer = next({ dev: process.env.NODE_ENV !== 'production' });
  const nextHandler = nextServer.getRequestHandler();
  nextServer.prepare().then(() => {
    expressServer.get('*', (req, res) => {
      return nextHandler(req, res);
    });
    expressServer.listen(expressServer.get('port'), async () => {
      await initApollo(expressServer);
      logInfo('application.js', 'start', `Server running on port ${process.env.PORT}`);
    });
  });
}

export default {
  initializeExpress,
  start
};
