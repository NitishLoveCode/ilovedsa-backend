import ActivityLog from '../models/ActivityLog';
import { User } from '../models/User';
import { hashPassword, verifyPassword } from '../utils/auth.utils';

export const registerService = async (data: { username: string; email: string; password: string }) => {
  const { username, email, password } = data;
 
  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      throw new Error('User already exists');
    }
    // hashing password.
    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser = await User.create({
      username,
      email,
      password_hash: hashedPassword,
    });

    // create initial user activity (dsa_steps = 1, dsa_sub_steps = 1)
    await ActivityLog.create({
      dsa_steps: 1,
      dsa_sub_steps: 1,
      user_id: newUser.dataValues.id
    })

    return {
      id: newUser.dataValues.id,
      userName: newUser.dataValues.username,
      email: newUser.dataValues.email
    };
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};


export const loginServices = async(data: {email: string, password: string}) =>{
  const {email, password} = data;
  try{
    const existingUser = await User.findOne({ where: { email } });
    if(existingUser){
      const isPasswordMatch = await verifyPassword(password, existingUser.dataValues.password_hash);
      if(isPasswordMatch){
        return {
          id: existingUser.dataValues.id,
          userName: existingUser.dataValues.username,
          email: existingUser.dataValues.email
        }
      }else{
        throw new Error("Invalid email or Password.")
      }

    }else{
      throw new Error("Email or Password invalid.")
    }

  }catch(error){
    console.error("Login error:", error);
    throw error
  }

}
