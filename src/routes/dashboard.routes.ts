import express from 'express';
import { DSA_STEPS, GET_SINGLE_QUESTION_BY_STEP_ID, SERVICEBASE_COMPENY_DSA_STEPS, STACK_SWITCH, TYPESCRIPT} from '../constants/CONSTANTS';
import { dsaStepsController } from '../controllers/dahboard/dashboard.controller';
import { checkAuthCookie } from '../middlewares/auth.middleware';
import { stackSwitch } from '../controllers/dahboard/stackSwitch.dashboard.controller';
import { servicesBaseCompanyDSASteps } from '../controllers/dahboard/servicesBaseCompanyDSASteps';
import { typeScriptInterviewQuestion } from '../controllers/dahboard/typescript.dashboard.controllers';



const router = express.Router();


// Get Dsa steps
router.get(DSA_STEPS, checkAuthCookie, dsaStepsController)
router.get(SERVICEBASE_COMPENY_DSA_STEPS, checkAuthCookie, servicesBaseCompanyDSASteps)
router.get(TYPESCRIPT, checkAuthCookie, typeScriptInterviewQuestion)
router.get(STACK_SWITCH, checkAuthCookie, stackSwitch)
router.get(GET_SINGLE_QUESTION_BY_STEP_ID, checkAuthCookie, stackSwitch)

export default router;