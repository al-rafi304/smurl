import http from 'http';
import express from 'express';
import loggingHandler from './middlewares/loggingHandler';
import connectDB from './configs/database';
import { SERVER_ENV } from './configs/env';

const server = express();
let httpServer: ReturnType<typeof http.createServer>;

import smurlRoutes from './routes/smurl';

const start = async () => {
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());
    server.use(loggingHandler);

    server.use('/api/v1', smurlRoutes);

    await connectDB();
    console.log("Connected to database");

    httpServer = http.createServer(server);
    httpServer.listen(SERVER_ENV.PORT, () => {
        console.log(`Server started on ${SERVER_ENV.HOST}:${SERVER_ENV.PORT}`);
    })
}

start()