import express from 'express';
import { ping, healthComponents, health } from '../controllers/status.controller.js';

const statusRouter = new express.Router();

statusRouter.get('/ping', ping);
statusRouter.get('/health/components', healthComponents);
statusRouter.get('/health', health);

export default statusRouter;
