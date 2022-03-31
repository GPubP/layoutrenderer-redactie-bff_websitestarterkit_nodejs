/* istanbul ignore file */
import { createLogger, format, transports } from 'winston';
const { combine, colorize, label, printf } = format;

export const loggerService = createLogger({
  transports: [
    new transports.Console({
      level: 'debug',
      format: combine(
        colorize(),
        label({ label: '[LayoutRenderer Starterkit Website]' }),
        printf(function ({ label, level, message }) {
          const parsedString =
            typeof message === 'string' || message instanceof String
              ? message.replace(/(\r\n|\n|\r)/gm, '')
              : JSON.stringify(message, null, 2);
          return `${colorize().colorize('silly', label)} ${level}: ${parsedString}`;
        })
      )
    })
  ]
});

loggerService.stream = {
  write(message) {
    loggerService.info(message);
  }
};

export default {
  error: function (message) {
    loggerService.error(message);
  },
  warn: function (message) {
    loggerService.warn(message);
  },
  info: function (message) {
    loggerService.info(message);
  },
  verbose: function (message) {
    loggerService.verbose(message);
  },
  debug: function (message) {
    loggerService.debug(message);
  },
  silly: function (message) {
    loggerService.silly(message);
  }
};
