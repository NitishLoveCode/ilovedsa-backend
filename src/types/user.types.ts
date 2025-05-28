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