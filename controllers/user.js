import { UserService } from '../services/index.js';

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
}

export default AuthController;
