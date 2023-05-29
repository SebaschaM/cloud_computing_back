import { BranchService } from '../services/index.js';

class BranchController {
  constructor() {
    this.branchService = new BranchService();
  }

  // http://localhost:3000/api/branch
  getBranches = async (req, res) => {

    try {
      const Branches = await this.branchService.getBranches();
      return res.json(Branches);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };

  getBranchById = async (req, res) => {
    try {
      const { id } = req.params;
      const Branch = await this.branchService.getBranchById(id);
      if (!Branch) {
        return res.status(404).json({ message: 'Branch not found' });
      }
      return res.json(Branch);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };

}

export default BranchController;
