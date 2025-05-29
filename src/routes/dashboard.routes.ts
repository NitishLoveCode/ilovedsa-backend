import express from 'express';
import { DSA_STEPS} from '../constants/CONSTANTS';
import { dsaStepsController } from '../controllers/dashboard.controller';
import { checkAuthCookie } from '../middlewares/auth.middleware';



const router = express.Router();


// Get Dsa steps
router.get(DSA_STEPS, checkAuthCookie, dsaStepsController)

export default router;