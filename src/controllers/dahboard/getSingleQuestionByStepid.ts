import { NextFunction, Request, Response } from "express";
import { StackSwitchServices } from "../../services/dashboard/stackSwitch.services";



// Get Question by CONTROLLER
export const getSingleQuestionByStepid = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const dsaSteps = await StackSwitchServices();
        if(dsaSteps){
            res
            .status(200)
            .json({
                error: false,
                message: "Data fetched successfully", 
                data: dsaSteps
            })
        }else{
            res
            .status(500)
            .json({
                error: true,
                message: "Somthing went wrong.", 
                data: []
            })
        }

    }catch(error){
        next(error)
    }

};