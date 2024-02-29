import express from 'express';
import {
  createuser,
  deleteUser,
  getUsers,
  updateUser
} from '../controllers/users.controllers';

const router = express.Router();

router.post('/users', createuser);
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
