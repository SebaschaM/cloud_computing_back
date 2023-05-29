import { Router } from 'express';
import { AuthController } from '../controllers/index.js';
import checkAuth from '../middleware/checkAuth.js';


const routerAuth = Router();
const authController = new AuthController();

// http://localhost:3000/api/auth/login

routerAuth.post('/login', [], authController.login)

routerAuth.post('/register', [],authController.register);

routerAuth.get('/profile', [], checkAuth, authController.profile); // llenar header con token

routerAuth.post('/revalidate', [], checkAuth, authController.revalidateToken); //considerar aquí o otra ruta para revalidar token
routerAuth.post('/updateprofile', [], checkAuth, authController.updateProfile); // llenar header con token

export default routerAuth;
