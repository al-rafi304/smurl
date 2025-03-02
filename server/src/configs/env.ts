import dotenv from 'dotenv';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const MONGO_URI = process.env.MONGO_URI

export const SERVER_ENV = {
    HOST: process.env.SERVER_HOST,
    PORT: process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000
}