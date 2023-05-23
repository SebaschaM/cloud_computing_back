import connection from '../config/connectionDB.js';

class ProductService {
  constructor() {}

  async getProducts() {
    try {
      const query = 'SELECT * FROM product';
      const [products] = await connection.query(query);
      return products;
    } catch (error) {
      console.error('Error al obtener los productos: ', error);
      throw error;
    }
  }

  async getProductById(id) {
    try {
      const query = 'SELECT * FROM product WHERE idProduct = ?';
      const product = await connection.query(query, [id]);
      return product[0];
    } catch (error) {
      console.error(`Error al obtener el producto con ID ${id}: `, error);
      throw error;
    }
  }
}

export default ProductService;
