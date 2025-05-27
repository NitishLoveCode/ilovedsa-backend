import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller';
import { loginValidation, registerValidation } from '../validation/auth.validation ';
import { validate } from '../middlewares/auth.validate';
import { lOGIN_PATH, REGISTER_PATH } from '../constants/CONSTANTS';

const router = express.Router();


// POST ROUTES
router.post(REGISTER_PATH, registerValidation, validate, registerUser);
router.post(lOGIN_PATH, loginValidation, validate, loginUser);

export default router;


