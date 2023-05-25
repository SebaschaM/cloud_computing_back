import { Router } from 'express';
import { AuthController } from '../controllers/index.js';


const routerAuth = Router();
const authController = new AuthController();

// http://localhost:3000/api/auth/login

routerAuth.post('/login', [], authController.login)

routerAuth.post('/register', [], (req, res) => {
  return res.json({
    msg: 'Hola register',
  });
});

export default routerAuth;
