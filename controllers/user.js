import { UserService } from '../services/index.js';
import { verifyToken } from '../utils/jwt/token.js';

class AuthController {
  constructor() {
    this.userService = new UserService();
  }

  // http://localhost:3000/api/auth/login
  login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await this.userService.login(email, password);
      return res.json(user);
    } catch (error) {
      // Manejo del error de usuario no encontrado
      return res.status(404).json({ message: error.message });
    }
  };
  // http://localhost:3000/api/auth/register
  register = async (req, res) => {
    const { fullname, email, password, phone } = req.body;

    try {
      const newUser = await this.userService.register(fullname, email, password, phone);
      return res.json(newUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  async getUserData(req, res) {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    const token = authorizationHeader.split(' ')[1];

    try {
      console.log(token);
      const decodedToken = verifyToken(token);
      
      

      const userId = decodedToken.id;
      const userEmail = decodedToken.email;

      // Operaciones con los datos del usuario...
      return res.json({ id: userId, email: userEmail });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }
}

export default AuthController;
