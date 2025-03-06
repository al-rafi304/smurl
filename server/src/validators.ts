import { body, param } from 'express-validator';
import * as utils from './utils';

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
]