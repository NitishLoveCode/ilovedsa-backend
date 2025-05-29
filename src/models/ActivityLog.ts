import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import { IActivityLogAttributes } from '../types/sequelizeModal.types';


// Optional fields when creating a new record (id will auto-increment)
interface ActivityLogCreationAttributes extends Optional<IActivityLogAttributes, 'id'> {}

export const ActivityLog = sequelize.define<Model<IActivityLogAttributes, ActivityLogCreationAttributes>>('activity_log', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dsa_steps: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dsa_sub_steps: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
}, {
  tableName: 'activity_log',
  timestamps: false
});

export default ActivityLog;
