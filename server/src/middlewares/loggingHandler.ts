import { Request, Response, NextFunction } from "express";

export default function loggingHandler(req: Request, res: Response, next: NextFunction) {
    console.log(`<== Request \t[${req.method}] -> ${req.url} || ${req.socket.remoteAddress}`);

    res.on('finish', () => {
        console.log(`==> Response \t[${res.statusCode}] -> ${req.url} || ${req.socket.remoteAddress}`)
        // console.log(`Request - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
    });

    next();
}
