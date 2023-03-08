import express from 'express';
import { postNewUser, getUsers, getUserNames, getUserEmails, getUserAddresses } from '../controllers/controller.js';
import { handleBadRoute, verifyPostBody } from '../middleware/middleware.js';

const router = express.Router();

// MongoDB specific routes
router.post('/api/users', verifyPostBody, postNewUser);

router.get('/api/users', getUsers);

// PlaceholderDB and MongoDB routes
router.get('/api/users/names', getUserNames);

router.get('/api/users/emails', getUserEmails);

router.get('/api/users/addresses', getUserAddresses);

// Bad Route
router.get('*', handleBadRoute);

export default router;
