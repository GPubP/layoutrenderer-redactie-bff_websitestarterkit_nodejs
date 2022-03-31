import request from 'supertest';
import server from '../application.js';

const api = request(server.initializeExpress());

describe('Status GET - API - Status calls', () => {
  describe('GET /status/ping', () => {
    test('it should return a message. Ping ok (200).', async () => {
      const res = await api.get('/status/ping').expect(200);
      expect(res.body.message).toBe('ok');
    });
  });

  describe('GET /status/health/components', () => {
    test('it should return the health of the components. Components check ok (200).', async () => {
      const res = await api.get('/status/health/components').expect(200);
      expect(res.body.status).toBe('ok');
      expect(res.body.components[0].status).toBe('ok');
      expect(res.body.components[0].name).toBe('layoutrenderer-starterkit');
    });
  });

  describe('GET /status/health', () => {
    test('it should return the summarized health. Health check ok (200).', async () => {
      const res = await api.get('/status/health').expect(200);
      expect(res.body.status).toBe('ok');
    });
  });
});
