import { body } from 'express-validator';

export const createSmurlValidator = [
    body('original')
        .exists()
        .withMessage("Original URL is missing")
        .isString()
        .trim()
]