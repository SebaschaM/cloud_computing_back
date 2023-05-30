import express from 'express';
import cors from 'cors';

import { routerAuth, routerProduct } from './routes/index.js';
import handleConnect from './config/connectionDB.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', routerAuth);
app.use('/api/product', routerProduct);

app.listen(3000, async () => {
  await handleConnect();
  console.log(`Server is running on port 3000`);
});
