import { NextFunction, Request, Response } from "express";
import { dashboardServices } from "../../services/dashboard/dashboard.services";
import { verifyToken } from "../../utils/auth.utils";
import { servicesBaseCompanyDSAStepsServices } from "../../services/dashboard/servicesBaseCompanyDSASteps.services";
import { typescriptInterview } from "../../services/dashboard/typescriptInterview";



// DSA STEPS CONTROLLER
export const typeScriptInterviewQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const dsaSteps = await typescriptInterview(await verifyToken(req.cookies.token));
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