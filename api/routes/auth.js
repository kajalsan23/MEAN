import express from 'express';
import {findByName, getAllUsers, login, register} from '../controllers/auth.controller.js';

const router = express.Router();


//register user

router.post('/register',register);


// login

router.post('/login', login)


//getAllUsers

router.get('/getAllUsers',getAllUsers);

//getByAllUsers

router.get('/getByUser/:name',findByName)

export default router;