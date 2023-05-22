import { Router } from 'express';

// const { register, confirmToken, login, revalidateToken, getProfile, updateProfile } = require('../controllers/auth');

const router2 = Router();

router2.post('/product', [], (req, res) => {
  return res.json({
    msg: 'Hola productossss',
  });
});

export default router2;
