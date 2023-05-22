import { Router } from 'express';

// const { register, confirmToken, login, revalidateToken, getProfile, updateProfile } = require('../controllers/auth');

const router = Router();

router.post('/login', [], (req, res) => {
  return res.json({
    msg: 'Hola mundo',
  });
});

export default router;
