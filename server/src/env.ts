import dotenv from 'dotenv';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const URL_TTL: number = process.env.URL_TTL ? Number(process.env.URL_TTL) : 86400
export const URL_ALPHABETS =  process.env.URL_ALPHABETS ? String(process.env.URL_ALPHABETS) : "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
export const URL_LENGTH = process.env.URL_LENGTH ? Number(process.env.URL_LENGTH) : 6

export const MONGO_URI = process.env.MONGO_URI

export const SERVER_ENV = {
    HOST: process.env.SERVER_HOST,
    PORT: process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000
}