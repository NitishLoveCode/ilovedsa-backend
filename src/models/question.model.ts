import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import { QuestionAttributes } from "../types/sequelizeModal.types";

interface QuestionCreationAttributes extends Optional<QuestionAttributes, "id" | "created_at" | "updated_at"> {}

export const Question = sequelize.define<Model<QuestionAttributes, QuestionCreationAttributes>>(
  "Question",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    starter_code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "questions",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
