import { Request, Response } from "express";
import Smurl from "../models/smurl";
import { CreateSmurlDto, RedirectSmurlDto } from "../dtos";
import { validationResult } from "express-validator";
import { generateAddress } from "../utils";

export const createSmurl = async (
    req: Request<{}, {}, CreateSmurlDto>,
    res: Response
) => {

    const targetUrl = req.body.target;
    const smurl = await Smurl.create({
        target: targetUrl,
        address: await generateAddress()
    });

    res.json({ smurl: smurl.address });

}

export const redirectSmurl = async (
    req: Request<RedirectSmurlDto>,
    res: Response
) => {

    const smurl = await Smurl.findOne({ address: req.params.address })
    if (!smurl) {
        res.status(404).json({ error: "Invalid url" });
        return;
    }
    res.redirect(smurl.target);

}