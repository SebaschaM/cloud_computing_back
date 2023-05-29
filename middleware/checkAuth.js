import { verifyToken } from "../utils/jwt/token.js";


const checkAuth = async (req, res, next) => {
  try {
    //console.log(req.headers.authorization)
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    const token = authorizationHeader.split(' ')[1];
    const tokenData = verifyToken(token);

    //agregado por que si no se rompe el codigo
    if (!tokenData) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.id = tokenData.id; //podemos verificar el id del usuario
    req.email = tokenData.email; 

    if (tokenData.id) {
      next();
    } else {
      return res.status(401).json({ message: 'Token inválido' });
    }
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

export default checkAuth;