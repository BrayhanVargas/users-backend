import express from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser
} from '../controllers/user.controllers.js';

const router = express.Router();

router.get('/user', getUser);
router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users', updateUser);
router.delete('/users', deleteUser);

export default router;
