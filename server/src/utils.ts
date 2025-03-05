import * as env from "./env";
import { customAlphabet } from "nanoid";
import Smurl from "./models/smurl";

const nanoid = customAlphabet(env.URL_ALPHABETS, env.URL_LENGTH);

export const generateAddress = async (): Promise<string> => {
    const id = nanoid();
    const exists = await Smurl.exists({ short: id })
    if (exists) {
        return generateAddress();
    }
    return id;
}