import express from 'express';
import { userMessage } from '../Controllers/messageController';

const router = express.Router();

router.route('/message').post(userMessage);

export default router;
