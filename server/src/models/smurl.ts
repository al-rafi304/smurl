import mongoose, { Model, Schema, Document } from "mongoose";
import * as env from '../env';

interface ISmurl extends Document {
    original: string;
    short: string;
    expiresAt: Date;
}

const SmurlSchema = new Schema<ISmurl>(
    {
        original: {
            type: String,
            required: true
        },
        short: {
            type: String,
            required: true
        },
        expiresAt: {
            type: Date,
            default: () => new Date(Date.now() + env.URL_TTL * 1000),
            index: { expireAfterSeconds: 0 }
        }

    },
    { timestamps: true }
);

const Smurl: Model<ISmurl> = mongoose.model<ISmurl>("Smurl", SmurlSchema);
export default Smurl;