import logger from 'morgan';
import { loggerService } from '../services/logger.service.js';

export function initServerLogging(server) {
  if (process.env.NODE_ENV !== 'test') {
    server.use(
      logger(':date[iso] - :method :url (:status) :response-time ms "[:remote-addr] - :referrer | :user-agent"', {
        stream: loggerService.stream
      })
    );
  }
}
