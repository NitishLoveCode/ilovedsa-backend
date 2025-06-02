import { QueryTypes } from "sequelize"
import sequelize from "../../config/db"







export const findSingleQuestionById = async(questionId: number) =>{

    const query  = `
        SELECT position, title, description, starter_code FROM public.questions 
        WHERE Id = :questionId;
    `

    const data = await sequelize.query(query, {
        replacements: { questionId },
        type: QueryTypes.SELECT
    })
  return data;
}