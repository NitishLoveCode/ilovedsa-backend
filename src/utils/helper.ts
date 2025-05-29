import { Response } from "express";

/**
 * Interface for sending cookies.
 * Includes the Express response object and the JWT token string.
 */
interface ICookieSender {
  res: Response;
  token: string;
}

/**
 * Interface for sending API responses.
 * Inherits the response object and includes additional response metadata.
 */
interface IResponseSender extends Pick<ICookieSender, "res"> {
  statusCode: number; // HTTP status code (e.g., 200, 400, 500)
  error: boolean;     // Indicates whether the response represents an error
  message: string;    // Human-readable message to describe the response
}

/**
 * Sends an HTTP-only cookie named 'token' to the client.
 * The cookie is configured for security and cross-origin handling.
 * 
 * @param res - Express response object
 * @param token - JWT or session token to store in the cookie
 */
export const cookieSender = ({ res, token }: ICookieSender) => {
  res.cookie("token", token, {
    httpOnly: true, // Prevents JavaScript access to the cookie (helps mitigate XSS)
    secure: process.env.NODE_ENV === "production", // Only send over HTTPS in production
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Controls cross-site behavior
    maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expires in 7 days
  });
};

/**
 * Sends a JSON response to the client in a consistent format.
 * Useful for standardizing API responses across routes.
 * 
 * @template T - Type of the data payload
 * @param res - Express response object
 * @param statusCode - HTTP status code
 * @param error - Boolean indicating success or failure
 * @param message - Description of the response
 * @param data - The actual data to send in the response body
 */
export const responseSender = <T>({
  res,
  data,
  statusCode,
  error,
  message,
}: IResponseSender & { data: T }) => {
  res.status(statusCode).json({
    error,
    message,
    data,
  });
};
