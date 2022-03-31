import { STATUS_MESSAGES, checkComponents } from '../services/health.service';

export function ping(_, res) {
  return res.json({ message: STATUS_MESSAGES.OK });
}

export function healthComponents(_, res) {
  return res.json(checkComponents());
}

export function health(_, res) {
  const status = checkComponents().status;
  return res.json({ status });
}
