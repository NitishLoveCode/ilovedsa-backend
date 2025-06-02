import express from 'express';
import { PROBLOMS_BY_QUESION_ID, STEP_DATA_FOR_CARD } from '../constants/CONSTANTS';
import { checkAuthCookie } from '../middlewares/auth.middleware';
import { stepDaaInfo } from '../controllers/codeEditor/stepDatainfo.controller';
import { getProblomsById } from '../controllers/codeEditor/getSingleProblom.controller';




const router = express.Router();


router.get(STEP_DATA_FOR_CARD, checkAuthCookie, stepDaaInfo)
router.get(PROBLOMS_BY_QUESION_ID, checkAuthCookie, getProblomsById)


export default router;