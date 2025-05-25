import bcrypt from 'bcrypt';
import { User } from '../models/User';

export const registerService = async (data: { name: string; email: string; password: string }) => {
  const { name, email, password } = data;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return newUser;
};
