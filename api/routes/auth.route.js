import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// Import auth controller
router.post('/signup', signup);
router.post('/signin', signin);

export default router;
