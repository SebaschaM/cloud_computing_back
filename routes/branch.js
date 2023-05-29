import { Router } from 'express';
import { BranchController } from '../controllers/index.js';


const routerBranch = Router();
const branchService = new BranchController();

// http://localhost:3000/api/branchs

routerBranch.get('/', [], branchService.getBranches)
routerBranch.get('/:id', [], branchService.getBranchById)

export default routerBranch;