import ActivityLog from "../../models/ActivityLog";
import DSAStep from "../../models/DsaSteps";
import { IAuthTokenVerifyType, IDashboardResponseDataSet, IDsaStepsInterface } from "../../types/user.types";

export const dashboardServices = async (cookieData: IAuthTokenVerifyType): Promise<IDashboardResponseDataSet | null> => {
  try {

    // Getting dsa steps
    const dsaSteps = await DSAStep.findAll();

    // Getting activityLog
    const activityLog = await ActivityLog.findOne({where: {user_id: cookieData.id}})

    const responseData: IDsaStepsInterface[][][] = [];
    let dataStep: IDsaStepsInterface[][] = [];

    for (const [index, element] of dsaSteps.entries()) {
      dataStep.push([element.dataValues]);

      // Push a group of 6 elements
      if ((index + 1) % 6 === 0) {
        responseData.push(dataStep);
        dataStep = [];
      }
    }

    // Push remaining elements if any
    if (dataStep.length > 0) {
      responseData.push(dataStep);
    }

    // sending only steps.
    const dsa_sub_steps = activityLog?.dataValues.dsa_sub_steps;
    const dsa_steps = activityLog?.dataValues.dsa_steps;

    // Response Data.
    const responseDataSet = {
      activityLog: {dsa_sub_steps, dsa_steps},
      responseData
    }

    return responseDataSet;
  } catch (error) {
    console.error("Error in dashboardServices:", error);
    return null;
  }
};
