import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../config/db';
import { IDsaStepsInterface } from '../../types/user.types';


interface DsaStepCreatingAttributes extends Optional<IDsaStepsInterface, "id" | "ask_by" | "ask_chance" | "step" | "step_name"> {};

export const servicesBaseCompanyDSAStepsModal = sequelize.define<Model<IDsaStepsInterface, DsaStepCreatingAttributes>>('servicesbase_companydsa_steps', {
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
  tableName: 'servicesbase_companydsa_steps',
  timestamps: false
});

export default servicesBaseCompanyDSAStepsModal;
