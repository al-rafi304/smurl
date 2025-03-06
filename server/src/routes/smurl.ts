import { Router } from "express";
import { createSmurl, redirectSmurl } from "../controllers/shortUrl";
import { createSmurlValidator, redirectSmurlValidator } from "../validators";

const router = Router();

router.route('/').post(createSmurlValidator, createSmurl);
router.route('/:address').get(redirectSmurlValidator, redirectSmurl)

export default router;
