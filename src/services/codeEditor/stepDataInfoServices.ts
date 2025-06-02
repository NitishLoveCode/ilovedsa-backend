import sequelize from "../../config/db"
import { QueryTypes } from 'sequelize';



export const stepDataInfoServices = async(stackId: number, stepid: number):Promise<any> =>{
    
    const querryForStepDataInfo = `
        SELECT id, position, short_title FROM questions 
        WHERE step_id = :stepid AND stack_id = :stackId
    `
    const data = await sequelize.query(querryForStepDataInfo, {
    replacements: { stepid, stackId },
    type: QueryTypes.SELECT
  })
  return data;
}