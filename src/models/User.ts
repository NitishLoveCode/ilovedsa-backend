import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import { UserAttributes } from "../types/user.types";


// 2. Define creation attributes for optional fields during creation
interface UserCreationAttributes extends Optional<UserAttributes, "id" | "username" | "created_at" | "updated_at"> {}

// 3. Define model type by extending Model with attributes and creation attributes
export const User = sequelize.define<Model<UserAttributes, UserCreationAttributes>>(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
