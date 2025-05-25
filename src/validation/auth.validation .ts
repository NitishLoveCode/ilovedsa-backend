import { body } from 'express-validator';

export const registerValidation = [
  body('username')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters'),
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
];


export const loginValidation = [
  body('email').isEmail().withMessage('Please enter a valid email.'),
  body('password').isLength({min: 6}).withMessage('Invalid password')
]
