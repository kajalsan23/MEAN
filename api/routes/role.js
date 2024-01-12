import express from 'express';

import { createRole, deleteRoles, getAllRoles, updateRole } from '../controllers/role.controller.js';

const router = express.Router();

//create new role in DB
router.post('/create', createRole)

//Update role in DB

router.put('/update/:id', updateRole)

// get all Roles from DB

router.get('/getAll',getAllRoles)


//delete Role from DB

router.delete("/deleteRole/:id", deleteRoles);


export default router;
