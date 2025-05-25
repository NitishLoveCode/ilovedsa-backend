import { Request, Response, NextFunction } from 'express';
import { loginServices, registerService } from '../services/auth.service';
import { generateToken } from '../utils/auth.utils';

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await registerService(req.body);
    
    // Adding token.
    const token = generateToken(user)
    res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000, // 1 hour
    })
    .status(201).json({ message: 'User registered successfully', user});

  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const user = await loginServices(req.body);

    // Adding token.
    const token = generateToken(user)
    res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000, // 1 hour
    })
    .status(200).json({message: "User logged in successfully", user})
    
  }catch(error){
    next(error)
  }
};
