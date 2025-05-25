export interface UserAttributes {
  id: number;
  username?: string;
  email: string;
  password_hash: string;
  created_at?: Date;
  updated_at?: Date;
}