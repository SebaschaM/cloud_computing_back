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

  profile = async (req, res) => {
    const id = req.id;
    const email = req.email;

    try {
      const user = await this.userService.findEmail(email);
      if (!user) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
      }

      // Operaciones con los datos del usuario...
      return res.json({ id: id, email: email, fullname: user.fullname, phone: user.phone });
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: error.message });
    }
  };

  updateProfile = async (req, res) => {
    const id = req.id;
    const body = req.body;
    const email = req.email;

    try {
      const updatedUser = await this.userService.updateProfile(id, body);
      if (!updatedUser) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
      }
      const user = await this.userService.findEmail(email);
      // ejecutar revaidate token, mi pregunta es el token no se actualiza?
      return res.json({ message: 'User update', id: id, fullname: user.fullname, phone: user.phone });
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: error.message });
    }
  };

  revalidateToken = async (req, res) => {
    const id = req.id;
    const email = req.email;

    try {
      const user = await this.userService.findEmail(email);
      if (!user) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
      }

      // Operaciones con los datos del usuario...
      return res.json({ id: id, email: email, fullname: user.fullname, phone: user.phone });
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: error.message });
    }
  };
}

export default AuthController;
