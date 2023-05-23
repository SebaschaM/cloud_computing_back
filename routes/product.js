import { Router } from 'express';
import { ProductController } from '../controllers/index.js';

const routerProduct = Router();
const productController = new ProductController();

routerProduct.get('', [], productController.findAll);
routerProduct.get('/:id', [], productController.findById);

export default routerProduct;
