import express from 'express';
import {findByName, findByNameUsingPost, getAllUsers, login, register, registerAdmin, searchFunctionality} from '../controllers/auth.controller.js';

const router = express.Router();


//register user

router.post('/register',register);

// register as admin

router.post('/register-admin',registerAdmin)

// login

router.post('/login', login)


//getAllUsers

router.get('/getAllUsers',getAllUsers);

//getUsersByName

router.get('/getByUser/:name',findByName)

//getUserbynamePost

router.post('/getByUser',findByNameUsingPost)

//Search Functionality

router.get('/search/:name',searchFunctionality);

export default router;