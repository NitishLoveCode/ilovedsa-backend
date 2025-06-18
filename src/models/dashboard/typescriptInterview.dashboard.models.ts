import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../config/db';
import { IDsaStepsInterface } from '../../types/user.types';


interface typescriptInterviewQuestion extends Optional<IDsaStepsInterface, "id" | "ask_by" | "ask_chance" | "step" | "step_name"> {};

export const typescriptInterviewQuestion = sequelize.define<Model<IDsaStepsInterface, typescriptInterviewQuestion>>('type_script', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  step: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  step_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ask_by: {
    type: DataTypes.STRING
  },
  ask_chance: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'type_script',
  timestamps: false
});

export default typescriptInterviewQuestion;
