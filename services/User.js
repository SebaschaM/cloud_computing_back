import connection from '../config/connectionDB.js';

class UserService {
  constructor() {}

  async login(email, password) {
    const user = await this.findEmail(email);
    if (user) {
      if (user.password === password) {
        return user;
      } else {
        throw new Error('Contraseña incorrecta');
      }
    } else {
      throw new Error(`No se encontró ningún usuario con el email ${email}`);
    }
  }

  async findEmail(email) {
    try {
      const query = 'SELECT * FROM usuario WHERE email = ?';
      const [user] = await connection.query(query, [email]);
      console.log(user.length, 'email?');
      if (user.length === 0) {
        console.log('Error al obtener el email');
        return null;
      }
      return user[0];
    } catch (error) {
      console.error(`Error al obtener el usuario con email ${email}: `, error);
      throw error;
    }
  }
}

export default UserService;
