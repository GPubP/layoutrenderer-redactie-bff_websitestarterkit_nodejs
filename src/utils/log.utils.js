/* istanbul ignore file */

import logger from '../services/logger.service.js';

export function logInfo(file, method, message) {
  return process.env.NODE_ENV !== 'test' && logger.info(`<${file}> - ${method} | ${message}.`);
}

export function logError(file, method, message) {
  return process.env.NODE_ENV !== 'test' && logger.error(`<${file}> - ${method} | ${message}.`);
}

export function logWarning(file, method, message) {
  return process.env.NODE_ENV !== 'test' && logger.warn(`<${file}> - ${method} | ${message}.`);
}

export function logDebug(file, method, message) {
  return process.env.NODE_ENV !== 'test' && logger.debug(`<${file}> - ${method} | ${message}.`);
}
