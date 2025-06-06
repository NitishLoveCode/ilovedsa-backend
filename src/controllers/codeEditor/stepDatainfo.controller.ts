import { NextFunction, Request, Response } from "express";
import { stepDataInfoServices } from "../../services/codeEditor/stepDataInfoServices";

export const stepDaaInfo = async(req: Request, res: Response, next: NextFunction) => {
  try {
    // const {stackId, stepid} = req.query; 
    const stackId = req.query.stackId;
    const stepid = req.query.stepid;
    const dsaSteps = await stepDataInfoServices(+stackId!, +stepid!);
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
};
