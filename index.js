import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { routerAuth, routerProduct } from './routes/index.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', routerAuth);
app.use('/api/product', routerProduct);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
