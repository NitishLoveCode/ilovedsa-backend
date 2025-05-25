import { Request, Response, NextFunction } from 'express';
import { registerService } from '../services/auth.service';

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await registerService(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  // TODO: Implement login logic
};
