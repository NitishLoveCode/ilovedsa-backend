import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const DSAStep = sequelize.define('dsa_steps', {
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
  tableName: 'dsa_steps',
  timestamps: false
});

export default DSAStep;
