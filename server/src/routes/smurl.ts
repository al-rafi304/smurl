import { Router } from "express";
import { createSmurl, redirectSmurl } from "../controllers/shortUrl";
import * as validator from "../validators";

const router = Router();

router.route('/').post(
    validator.createSmurlValidator, 
    createSmurl
);

router.route('/:address').get(
    validator.redirectSmurlValidator,
    validator.validate,
    redirectSmurl,
);

export default router;
