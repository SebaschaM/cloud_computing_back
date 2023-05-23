import { Router } from 'express';

const routerAuth = Router();

routerAuth.post('/login', [], (req, res) => {
  return res.json({
    msg: 'Hola mundo',
  });
});

export default routerAuth;
