import express from 'express';
import {createUser} from '../controllers/auth.controller.js';

const router = express.Router();


//register user

router.post('/register',createUser);



export default router;