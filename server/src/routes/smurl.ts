import { Router } from "express";
import { createSmurl } from "../controllers/shortUrl";
import { createSmurlValidator } from "../validators";

const router = Router();

router.route('/create').post(createSmurlValidator, createSmurl);

export default router;
