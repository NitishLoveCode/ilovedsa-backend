import { Optional } from "sequelize";
import { IActivityLogAttributes } from "./sequelizeModal.types";

export interface UserAttributes {
  id: number;
  username?: string;
  email: string;
  password_hash: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface userIdUserNameEmail {
  cookieUserData:  Pick<UserAttributes, "id" | "username" | "email">
}

export interface IDsaStepsInterface {
  id: number;
  step: number;
  step_name: string;
  ask_by: string;
  ask_chance: string;
}

export interface IDashboardResponseDataSet {
  responseData: IDsaStepsInterface[][][],
  activityLog: Optional<Pick<IActivityLogAttributes, "dsa_steps" | "dsa_sub_steps">, "dsa_steps" | "dsa_sub_steps"> | undefined
}


export interface IAuthTokenVerifyType {
  id: number,
  email: string,
  iat: number,
  exp: number
}