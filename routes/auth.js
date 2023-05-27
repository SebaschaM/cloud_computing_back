import { Router } from 'express';
import { AuthController } from '../controllers/index.js';


const routerAuth = Router();
const authController = new AuthController();

// http://localhost:3000/api/auth/login

routerAuth.post('/login', [], authController.login)

routerAuth.post('/register', [],authController.register);

routerAuth.post('/profile', [],authController.getUserData); // llenar header con token

export default routerAuth;
