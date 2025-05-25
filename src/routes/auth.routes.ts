import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller';
import { loginValidation, registerValidation } from '../validation/auth.validation ';
import { validate } from '../middlewares/auth.validate';

const router = express.Router();

router.post('/register', registerValidation, validate, registerUser);
router.post('/login', loginValidation, validate, loginUser);

export default router;
