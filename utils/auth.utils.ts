import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserAttributes } from '../types/user.types';

const JWT_SECRET = process.env.JWT_SECRET!;
const SALT_ROUNDS = process.env.SALT_ROUNDS!;

// Hash password
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, +SALT_ROUNDS);
}

// Verify password
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Generate JWT token
export function generateToken(user: UserAttributes): string {
  const payload = { id: user.id, username: user.username, email: user.email };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

// Verify JWT token middleware helper (we'll use this later)
export function verifyToken(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
}
