import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../config/db';

interface StackDetailsAttributes {
  id: number;
  StackName: string;
  numberOfSteps: number;
  numberOfAttempts: number;
  numberOfFinish: number;
  stack_id: number;
}

interface StackDetailsCreationAttributes extends Optional<StackDetailsAttributes, 'id'> {}

export const StackDetails = sequelize.define<Model<StackDetailsAttributes, StackDetailsCreationAttributes>>('stacks_details', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  StackName: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  numberOfSteps: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  numberOfAttempts: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  numberOfFinish: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  stack_id: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
}, {
  tableName: 'stacks_details',
  timestamps: false
});

export default StackDetails;
