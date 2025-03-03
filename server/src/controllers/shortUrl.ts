import { Request, Response } from "express";
import Smurl from "../models/smurl";
import { CreateSmurlDto } from "../dtos/create-smurl.dto";
import { validationResult } from "express-validator";


export const createSmurl = async (
    req: Request<{}, {}, CreateSmurlDto>,
    res: Response
): Promise<void> => {

    const valResult = validationResult(req);
    if (!valResult.isEmpty()) {
        res.status(400).json({ errors: valResult.array() });
        return;
    }

    const originalUrl = req.body.original;
    const smurl = await Smurl.create({
        original: originalUrl,
        short: originalUrl.slice(0, 5)
    });
    res.json({ smurl });
}