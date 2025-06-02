import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import { QuestionTypeMappingAttributes } from "../types/sequelizeModal.types";

interface QuestionTypeMappingCreationAttributes extends Optional<QuestionTypeMappingAttributes, "id" | "created_at" | "updated_at"> {}

export const QuestionTypeMapping = sequelize.define<Model<QuestionTypeMappingAttributes, QuestionTypeMappingCreationAttributes>>(
  "QuestionTypeMapping",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    step: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "question_type_mappings",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
