import express from 'express';
import { DSA_STEPS, SERVICEBASE_COMPENY_DSA_STEPS, STACK_SWITCH} from '../constants/CONSTANTS';
import { dsaStepsController } from '../controllers/dahboard/dashboard.controller';
import { checkAuthCookie } from '../middlewares/auth.middleware';
import { stackSwitch } from '../controllers/dahboard/stackSwitch.dashboard.controller';
import { servicesBaseCompanyDSASteps } from '../controllers/dahboard/servicesBaseCompanyDSASteps';



const router = express.Router();


// Get Dsa steps
router.get(DSA_STEPS, checkAuthCookie, dsaStepsController)
router.get(SERVICEBASE_COMPENY_DSA_STEPS, checkAuthCookie, servicesBaseCompanyDSASteps)
router.get(STACK_SWITCH, checkAuthCookie, stackSwitch)

export default router;