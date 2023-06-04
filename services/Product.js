import { connection } from '../config/connectionDB.js';

class ProductService {
  constructor() {}

  async getProducts(idSucursal) {
    try {
      const query = `SELECT p.* FROM product p
      INNER JOIN product_branch pb ON p.id = pb.product_id
      WHERE pb.branch_id = ?`;
      const [products] = await connection.query(query, [idSucursal]);
      return products;
    } catch (error) {
      console.error('Error al obtener los productos: ', error);
      throw error;
    }
  }

  async getProductById(idBranch) {
    try {
      const query = 'SELECT * FROM product WHERE product.id = ?';
      const product = await connection.query(query, [idBranch]);
      return product[0];
    } catch (error) {
      console.error(`Error al obtener el producto con ID ${id}: `, error);
      throw error;
    }
  }

  async getProductsCategories() {
    try {
      const query = 'SELECT * FROM category';
      const [categories] = await connection.query(query);
      return categories;
    } catch (error) {
      console.error(`Error al obtener la lista de categorias: `, error);
      throw error;
    }
  }

  async getProductByCategory(idCategory, idBranch) {
    try {
      const query =
        'SELECT p.* FROM product p INNER JOIN product_branch pb ON p.id = pb.product_id INNER JOIN category ca ON p.category_id = ca.id WHERE pb.branch_id = ? AND ca.id = ?';
      const [categories] = await connection.query(query, [idBranch, idCategory]);
      return categories;
    } catch (error) {
      console.error(`Error al obtener la lista de categorias: `, error);
      throw error;
    }
  }
}

export default ProductService;
