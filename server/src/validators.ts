import { body, param } from 'express-validator';

export const createSmurlValidator = [
    body('target')
        .exists()
        .withMessage("Target URL is missing")
        .isString()
        .withMessage("Target URL has to be a string")
        .trim()
]

export const redirectSmurlValidator = [
    param('address')
        .notEmpty()
        .withMessage("Invalid url address code")
]