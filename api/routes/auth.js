import express from 'express';
import {login, register, registerAdmin} from '../controllers/auth.controller.js';

const router = express.Router();


//register user

router.post('/register',register);

// register as admin

router.post('/register-admin',registerAdmin)

// login

router.post('/login', login)

export default router;