import express from "express";
import { findByName, findByNameUsingPost, getAllUsers, getById, searchFunctionality } from "../controllers/user.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

// router.get('/',);

// router.get('/:id',)



//getAllUsers

router.get('/',verifyAdmin,getAllUsers);

// getbyId

router.get('/:id',verifyUser,getById);

//getUsersByName

router.get('/getByUser/:name',findByName)

//getUserbynamePost

router.post('/getByUser',findByNameUsingPost)

//Search Functionality

router.get('/search/:name',searchFunctionality);

export default router;