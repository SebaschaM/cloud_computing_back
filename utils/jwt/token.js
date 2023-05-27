import jwt from 'jsonwebtoken';


export const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const options = {
    expiresIn: '24h',
  };
  const secretKey = 'hola'; 

  const token = jwt.sign(payload, secretKey, options);

  return token;
}

export const verifyToken = (token) => {
  const secretKey = 'hola'; 
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    throw new Error('Token inválido'); 
  }
}
