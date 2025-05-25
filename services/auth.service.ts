import bcrypt from 'bcrypt';
import { User } from '../models/User';

export const registerService = async (data: { name: string; email: string; password: string }) => {
  const { name, email, password } = data;
 
  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username: name,
      email,
      password_hash: hashedPassword,
    });

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
