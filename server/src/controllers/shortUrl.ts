import { Request, Response } from "express";
import Smurl from "../models/smurl";
import { CreateSmurlDto } from "../dtos";
import { validationResult } from "express-validator";
import { generateId } from "../utils";


export const createSmurl = async (
    req: Request<{}, {}, CreateSmurlDto>,
    res: Response
) => {

    const valResult = validationResult(req);
    if (!valResult.isEmpty()) {
        res.status(400).json({ errors: valResult.array() });
        return;
    }

    const originalUrl = req.body.original;
    const smurl = await Smurl.create({
        original: originalUrl,
        short: await generateId()
    });

    res.json({ smurl: smurl.short });
}