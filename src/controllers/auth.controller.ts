import { Request, Response, NextFunction } from 'express';
import { loginServices, registerService } from '../services/auth.service';
import { generateToken } from '../utils/auth.utils';
import { cookieSender, responseSender } from '../utils/helper';


// Register users
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await registerService(req.body);
    // Adding token.
    const token = generateToken(user)
    cookieSender({res, token}) // Sending cookie
    responseSender({
      data: user, 
      error: false, 
      message: "User registered successfully",
      res,
      statusCode: 201
    })
  } catch (err) {
    next(err);
  }
};


// Loign users
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const user = await loginServices(req.body);

    // Adding token.
    const token = generateToken(user)
    cookieSender({res, token}) // Sending cookie
    responseSender({
      data: user, 
      error: false, 
      message: "User logged in successfully",
      res,
      statusCode: 200
    })
  }catch(error){
    next(error)
  }
};
