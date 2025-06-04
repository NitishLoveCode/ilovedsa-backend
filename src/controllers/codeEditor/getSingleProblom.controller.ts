import { NextFunction, Request, Response } from "express";
import { findSingleQuestionById } from "../../services/codeEditor/findSingleQuestionById.services";




export const getProblomsById = async(req: Request, res: Response, next: NextFunction) =>{

    try {
        const problomId = req.query.problomsId
        const dsaSteps = await findSingleQuestionById(+problomId!);
        if (dsaSteps) {
          res.status(200).json({
            error: false,
            message: "Data fetched successfully",
            data: dsaSteps,
          });
        } else {
          res.status(500).json({
            error: true,
            message: "Somthing went wrong.",
            data: [],
          });
        }
      } catch (error) {
        next(error);
      }
}