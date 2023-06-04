import { connection } from '../config/connectionDB.js';

class BranchService {
  constructor() {}

  async getBranches() {
    try {
      const query = 'SELECT * FROM Branch';
      const [Branches] = await connection.query(query);
      return Branches;
    } catch (error) {
      console.error('Error al obtener las sucursales: ', error);
      throw error;
    }
  }

  async getBranchById(id) {
    try {
      const query = 'SELECT * FROM Branch WHERE id = ?';
      const [branch] = await connection.query(query, [id]);
      if (branch.length === 0) {
        return null;
      }
      return branch[0];
    } catch (error) {
      console.error(`Error al obtener la sucursal con ID ${id}: `, error);
      throw error;
    }
  }
}

export default BranchService;
