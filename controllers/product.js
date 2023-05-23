import { ProductService } from '../services/index.js';

class ProductController {
  constructor() {
    this.productService = new ProductService();
  }

  // http://localhost:3000/api/product
  findAll = async (req, res) => {
    const products = await this.productService.getProducts();
    return res.json(products);
  };

  // http://localhost:3000/api/product/2
  findById = async (req, res) => {
    const product = await this.productService.getProductById(req.params.id);
    return res.json(product);
  };
}

export default ProductController;
