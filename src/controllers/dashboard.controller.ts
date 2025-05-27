import { NextFunction, Request, Response } from "express";
import { dashboardServices } from "../services/dashboard/dashboard.services";



// DSA STEPS CONTROLLER
export const dsaStepsController = async (req: Request, res: Response, next: NextFunction) => {
    
    try{
        const dsaSteps = await dashboardServices();
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