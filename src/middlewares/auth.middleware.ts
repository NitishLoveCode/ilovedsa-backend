import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/auth.utils';



export const checkAuthCookie = async(req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    try{
        if(!token){
            res
            .status(401)
            .json({
                error: true,
                message: 'Unauthorized: No auth token found',
                data: [],
            })
        }

        const userData = await verifyToken(token);
        if(userData){
            next();
        }else{
            res
            .status(401)
            .json({
                error: true,
                message: 'Unauthorized: No auth token found',
                data: [],
            })
        }

    }catch(error){
        res
        .status(401)
        .json({
            error: true,
            message: 'Unauthorized: No auth token found',
            data: [],
        })
    }
};
