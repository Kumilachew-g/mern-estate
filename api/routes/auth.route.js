import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

// Import auth controller
router.post('/signup', signup);

export default router;
