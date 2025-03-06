import { Request, Response } from "express";
import Smurl from "../models/smurl";
import { CreateSmurlDto, RedirectSmurlDto } from "../dtos";
import { validationResult } from "express-validator";
import { generateAddress } from "../utils";

export const createSmurl = async (
    req: Request<{}, {}, CreateSmurlDto>,
    res: Response
) => {
    try {
        const valResult = validationResult(req);
        if (!valResult.isEmpty()) {
            res.status(400).json({ errors: valResult.array() });
            return;
        }
        
        const targetUrl = req.body.target;
        const smurl = await Smurl.create({
            target: targetUrl,
            address: await generateAddress()
        });
        
        res.json({ smurl: smurl.address });
    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
}

export const redirectSmurl = async (
    req: Request<RedirectSmurlDto>,
    res: Response
) => {
    try {
        
        const smurl = await Smurl.findOne({ address: req.params.address })
        if (!smurl) {
            res.status(404).json({ error: "Invalid url" });
            return;
        }
        res.redirect(smurl.target);

    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
}