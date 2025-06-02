export interface IActivityLogAttributes {
  id: number;
  dsa_steps: number;
  dsa_sub_steps: number;
  user_id: number;
}


export interface QuestionAttributes {
  id: number;
  title: string;
  description: string;
  starter_code: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface QuestionTypeAttributes {
  id: number;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface QuestionTypeMappingAttributes {
  id: number;
  question_id: number;
  type_id: number;
  step: number;
  created_at?: Date;
  updated_at?: Date;
}
