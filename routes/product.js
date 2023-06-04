import { Router } from 'express';
import { ProductController } from '../controllers/index.js';

const routerProduct = Router();
const productController = new ProductController();

routerProduct.get('/:idBranch', [], productController.findAll);
routerProduct.get('/find/:idProduct', [], productController.findById);
routerProduct.get('/findAll/category', [], productController.findAllProducsCategories);
routerProduct.get('/find/category/:idCategory', [], productController.findProductByCategory);

// http://localhost:3000/api/product/:idBranch
// http://localhost:3000/api/product/:idProduct
// http://localhost:3000/api/product/findAll/category
// http://localhost:3000/api/product/find/category/:idCategory?idBranch=1

export default routerProduct;
