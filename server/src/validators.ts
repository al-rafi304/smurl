import { body, param, validationResult } from 'express-validator';
import * as env from './env';
import * as utils from './utils';
import { NextFunction, Request, Response } from 'express';

export const createSmurlValidator = [
    body('target')
        .exists()
        .withMessage("Target URL is missing")
        .isString()
        .withMessage("Target URL has to be a string")
        .trim()
        .customSanitizer(utils.addProtocol)
]

export const redirectSmurlValidator = [
    param('address')
        .notEmpty()
        .withMessage("Invalid url address code")
        .isLength({ min: env.URL_LENGTH, max: env.URL_LENGTH })
        .withMessage("Invalid url address code")
]

export const validate = (req: Request, res: Response, next: NextFunction) => {
    console.log("got to validator!")
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400).json({ error: result.array()[0].msg })
        return;
    }

    next();
}