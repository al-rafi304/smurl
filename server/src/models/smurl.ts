import mongoose, { Model, Schema, Document } from "mongoose";
import * as env from '../env';

interface ISmurl extends Document {
    target: string;
    address: string;
    expiresAt: Date;
}

const SmurlSchema = new Schema<ISmurl>(
    {
        target: {
            type: String,
            required: true
        },
        address: {
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